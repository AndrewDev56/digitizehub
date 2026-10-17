import { spawn } from "node:child_process";
import { rename } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const apiDir = path.join(root, "app", "api");
const hiddenApiDir = path.join(root, "app", ".api-export-skip");

process.env.STATIC_EXPORT = "1";
process.env.NEXT_PUBLIC_CONTACT_ENDPOINT = "/send-mail.php";

let movedApi = false;

try {
  await rename(apiDir, hiddenApiDir);
  movedApi = true;
} catch {
  movedApi = false;
}

try {
  const code = await new Promise((resolve) => {
    const child = spawn("npx", ["next", "build"], {
      cwd: root,
      env: process.env,
      shell: true,
      stdio: "inherit",
    });
    child.on("close", resolve);
  });

  if (code !== 0) {
    process.exit(code ?? 1);
  }

  console.log("\nStatic site is in the out folder. Upload the contents of out/ to shared hosting.");
  console.log("Then copy out/mail-config.example.php to out/mail-config.php and add SMTP details.");
} finally {
  if (movedApi) {
    await rename(hiddenApiDir, apiDir);
  }
}
