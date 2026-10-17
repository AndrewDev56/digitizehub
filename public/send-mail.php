<?php

header("Content-Type: application/json; charset=utf-8");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  echo json_encode(["error" => "Method not allowed."]);
  exit;
}

$configFile = __DIR__ . "/mail-config.php";
if (!is_file($configFile)) {
  http_response_code(500);
  echo json_encode(["error" => "Copy mail-config.example.php to mail-config.php and add SMTP details."]);
  exit;
}

$config = require $configFile;
$raw = file_get_contents("php://input");
$body = json_decode($raw, true);

if (!is_array($body)) {
  http_response_code(400);
  echo json_encode(["error" => "Invalid request."]);
  exit;
}

function as_string($value) {
  return is_string($value) ? trim($value) : "";
}

function as_string_array($value) {
  if (!is_array($value)) {
    return [];
  }
  $items = [];
  foreach ($value as $item) {
    if (is_string($item) && trim($item) !== "") {
      $items[] = trim($item);
    }
  }
  return $items;
}

function parse_us_phone($value) {
  $digits = preg_replace("/\D+/", "", $value);
  if (strlen($digits) === 11 && $digits[0] === "1") {
    $digits = substr($digits, 1);
  }
  if (!preg_match("/^[2-9]\\d{2}[2-9]\\d{6}$/", $digits)) {
    return "";
  }
  return "+1" . $digits;
}

$payload = [
  "source" => ($body["source"] ?? "") === "service" ? "service" : "contact",
  "name" => as_string($body["name"] ?? ""),
  "email" => as_string($body["email"] ?? ""),
  "phone" => as_string($body["phone"] ?? ""),
  "company" => as_string($body["company"] ?? ""),
  "designation" => as_string($body["designation"] ?? ""),
  "hearAbout" => as_string($body["hearAbout"] ?? ""),
  "needs" => as_string_array($body["needs"] ?? []),
  "budget" => as_string($body["budget"] ?? ""),
  "details" => as_string($body["details"] ?? ""),
];

if (count($payload["needs"]) === 0) {
  http_response_code(400);
  echo json_encode(["error" => "Please select at least one service you need."]);
  exit;
}
if ($payload["budget"] === "") {
  http_response_code(400);
  echo json_encode(["error" => "Please select your project budget."]);
  exit;
}
if ($payload["company"] === "") {
  http_response_code(400);
  echo json_encode(["error" => "Please provide your company name."]);
  exit;
}
if (strlen($payload["name"]) < 2) {
  http_response_code(400);
  echo json_encode(["error" => "Please enter your full name."]);
  exit;
}
if (!filter_var($payload["email"], FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(["error" => "Please provide a valid email address."]);
  exit;
}

$phone = parse_us_phone($payload["phone"]);
if ($phone === "") {
  http_response_code(400);
  echo json_encode(["error" => "Please enter a valid US phone number."]);
  exit;
}
$payload["phone"] = $phone;

if ($payload["designation"] === "") {
  http_response_code(400);
  echo json_encode(["error" => "Please provide your designation."]);
  exit;
}
if ($payload["hearAbout"] === "") {
  http_response_code(400);
  echo json_encode(["error" => "Please tell us how you heard about us."]);
  exit;
}
if ($payload["details"] === "") {
  http_response_code(400);
  echo json_encode(["error" => "Please add your project details."]);
  exit;
}

$host = trim((string) ($config["host"] ?? "smtp.office365.com"));
$port = (int) ($config["port"] ?? 587);
$user = trim((string) ($config["user"] ?? ""));
$pass = (string) ($config["pass"] ?? "");
$to = trim((string) ($config["to"] ?? $user));
$fromName = trim((string) ($config["from_name"] ?? "Digitize Hub Website"));

if ($user === "" || $pass === "" || $to === "") {
  http_response_code(500);
  echo json_encode(["error" => "SMTP is not configured on the server."]);
  exit;
}

$source = $payload["source"] === "service" ? "Service page form" : "Contact page";
$needs = implode(", ", $payload["needs"]);
$subject = "New website inquiry from " . $payload["name"];
$text = implode("\n", [
  "Source: {$source}",
  "Name: {$payload["name"]}",
  "Email: {$payload["email"]}",
  "Phone: {$payload["phone"]}",
  "Company: {$payload["company"]}",
  "Designation: {$payload["designation"]}",
  "Heard about us: {$payload["hearAbout"]}",
  "Need: {$needs}",
  "Budget: {$payload["budget"]}",
  "",
  "Message:",
  $payload["details"],
]);

$htmlNeeds = "";
foreach ($payload["needs"] as $need) {
  $htmlNeeds .= '<span style="display:inline-block;background:#2a000b;color:#ffb3c2;padding:4px 10px;border-radius:12px;font-size:12px;font-weight:600;margin:2px;">' . htmlspecialchars($need, ENT_QUOTES, "UTF-8") . "</span> ";
}

$html = '<!DOCTYPE html><html><body style="font-family:Helvetica,Arial,sans-serif;background:#0b0b0d;color:#e5e7eb;padding:20px;">
  <div style="max-width:600px;margin:0 auto;background:#111113;border-radius:16px;overflow:hidden;border:1px solid #2a2a2e;">
    <div style="background:linear-gradient(135deg,#ff0036,#7a001a);padding:32px 24px;text-align:center;color:#fff;">
      <h1 style="margin:0;font-size:24px;">New website inquiry</h1>
      <p style="margin:6px 0 0;font-size:14px;">Digitize Hub ' . htmlspecialchars($source, ENT_QUOTES, "UTF-8") . '</p>
    </div>
    <div style="padding:28px 24px;">
      <p><strong>Name:</strong> ' . htmlspecialchars($payload["name"], ENT_QUOTES, "UTF-8") . '</p>
      <p><strong>Email:</strong> ' . htmlspecialchars($payload["email"], ENT_QUOTES, "UTF-8") . '</p>
      <p><strong>Phone:</strong> ' . htmlspecialchars($payload["phone"], ENT_QUOTES, "UTF-8") . '</p>
      <p><strong>Company:</strong> ' . htmlspecialchars($payload["company"], ENT_QUOTES, "UTF-8") . '</p>
      <p><strong>Designation:</strong> ' . htmlspecialchars($payload["designation"], ENT_QUOTES, "UTF-8") . '</p>
      <p><strong>Heard about us:</strong> ' . htmlspecialchars($payload["hearAbout"], ENT_QUOTES, "UTF-8") . '</p>
      <p><strong>Budget:</strong> ' . htmlspecialchars($payload["budget"], ENT_QUOTES, "UTF-8") . '</p>
      <p><strong>Services:</strong> ' . $htmlNeeds . '</p>
      <div style="background:#18181b;border-left:4px solid #ff0036;padding:14px 16px;border-radius:8px;">' . nl2br(htmlspecialchars($payload["details"], ENT_QUOTES, "UTF-8")) . '</div>
    </div>
  </div>
</body></html>';

function smtp_read($socket) {
  $data = "";
  while ($line = fgets($socket, 515)) {
    $data .= $line;
    if (isset($line[3]) && $line[3] === " ") {
      break;
    }
  }
  return $data;
}

function smtp_cmd($socket, $command, $expect) {
  fwrite($socket, $command . "\r\n");
  $response = smtp_read($socket);
  if (strpos($response, (string) $expect) !== 0) {
    throw new Exception(trim($response) !== "" ? trim($response) : "SMTP command failed");
  }
  return $response;
}

try {
  $errno = 0;
  $errstr = "";
  $socket = stream_socket_client(
    "tcp://{$host}:{$port}",
    $errno,
    $errstr,
    20,
    STREAM_CLIENT_CONNECT
  );
  if (!$socket) {
    throw new Exception($errstr !== "" ? $errstr : "Could not connect to SMTP.");
  }
  stream_set_timeout($socket, 20);
  smtp_read($socket);
  smtp_cmd($socket, "EHLO digitizehub.net", 250);
  smtp_cmd($socket, "STARTTLS", 220);
  $crypto = stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT);
  if ($crypto !== true) {
    throw new Exception("Could not start TLS with the mail server.");
  }
  smtp_cmd($socket, "EHLO digitizehub.net", 250);
  smtp_cmd($socket, "AUTH LOGIN", 334);
  smtp_cmd($socket, base64_encode($user), 334);
  smtp_cmd($socket, base64_encode($pass), 235);
  smtp_cmd($socket, "MAIL FROM:<{$user}>", 250);
  smtp_cmd($socket, "RCPT TO:<{$to}>", 250);
  smtp_cmd($socket, "DATA", 354);

  $encodedSubject = "=?UTF-8?B?" . base64_encode($subject) . "?=";
  $headers = [
    "Date: " . date("r"),
    "From: {$fromName} <{$user}>",
    "To: {$to}",
    "Reply-To: {$payload["email"]}",
    "Subject: {$encodedSubject}",
    "MIME-Version: 1.0",
    'Content-Type: text/html; charset="UTF-8"',
  ];
  $message = implode("\r\n", $headers) . "\r\n\r\n" . $html . "\r\n" . nl2br(htmlspecialchars($text, ENT_QUOTES, "UTF-8"));
  fwrite($socket, str_replace("\n.", "\n..", $message) . "\r\n.\r\n");
  $dataResponse = smtp_read($socket);
  if (strpos($dataResponse, "250") !== 0) {
    throw new Exception(trim($dataResponse) !== "" ? trim($dataResponse) : "Mail server rejected the message.");
  }
  fwrite($socket, "QUIT\r\n");
  fclose($socket);

  echo json_encode([
    "success" => true,
    "message" => "Your inquiry has been submitted successfully.",
  ]);
} catch (Exception $error) {
  if (isset($socket) && is_resource($socket)) {
    fclose($socket);
  }
  $message = $error->getMessage();
  error_log("Digitize Hub contact form SMTP error: " . $message);
  http_response_code(500);
  if (stripos($message, "5.7.139") !== false || stripos($message, "SmtpClientAuthentication is disabled") !== false) {
    echo json_encode([
      "error" => "Microsoft 365 still has SMTP Authentication off for info@digitizehub.net. Enable Authenticated SMTP in GoDaddy and Microsoft 365 admin, wait a few minutes, then try again.",
    ]);
    exit;
  }
  echo json_encode(["error" => "Error submitting request: " . $message]);
}
