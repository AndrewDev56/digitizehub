"use client";

import Link from "next/link";
import Image from "next/image";

type CommonProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "lg" | "md";
  icon?: "arrow" | "phone" | "chat";
  iconPosition?: "left" | "right";
  iconOnly?: boolean;
  "aria-label"?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: "button" | "submit" | "reset";
};

const iconOnlySizeStyles: Record<NonNullable<CommonProps["size"]>, string> = {
  lg: "size-[52px] sm:size-[60px] p-0",
  md: "size-[44px] sm:size-[48px] p-0",
};

const sizeStyles: Record<
  NonNullable<CommonProps["iconPosition"]>,
  Record<NonNullable<CommonProps["size"]>, string>
> = {
  right: {
    lg: "h-[52px] max-w-full pl-5 pr-2 text-[15px] gap-3 sm:h-[60px] sm:pl-[30px] sm:pr-[10px] sm:text-[18px] sm:gap-[38px]",
    md: "h-[48px] max-w-full pl-4 pr-2 text-[13.5px] gap-2.5 sm:h-[52px] sm:pl-[26px] sm:pr-[8px] sm:text-[15.6px] sm:gap-[10px]",
  },
  left: {
    lg: "h-[52px] max-w-full pl-2 pr-5 text-[15px] gap-3 sm:h-[60px] sm:pl-[10px] sm:pr-[30px] sm:text-[18px] sm:gap-[38px]",
    md: "h-[48px] max-w-full pl-2 pr-4 text-[13.5px] gap-2.5 sm:h-[52px] sm:pl-[8px] sm:pr-[26px] sm:text-[15.6px] sm:gap-[10px]",
  },
};

const iconSizeStyles: Record<NonNullable<CommonProps["size"]>, string> = {
  lg: "size-[40px]",
  md: "size-[35px]",
};

const iconOffsetStyles: Record<
  NonNullable<CommonProps["iconPosition"]>,
  Record<NonNullable<CommonProps["size"]>, string>
> = {
  right: {
    lg: "right-[10px]",
    md: "right-[8px]",
  },
  left: {
    lg: "left-[10px]",
    md: "left-[8px]",
  },
};

const variantStyles: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary: "bg-white",
  secondary: "border border-white/20 bg-transparent hover:border-transparent",
};

const labelStyles: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary: "text-black group-hover:text-white",
  secondary: "text-white",
};

const iconWrapStyles: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary: "bg-[#111111] group-hover:bg-transparent",
  secondary: "bg-white group-hover:bg-transparent",
};

const iconStyles: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary: "",
  secondary: "invert group-hover:invert-0",
};

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.4 21 3 13.6 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function ChatIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6l-2 2V4h14v10z" />
    </svg>
  );
}

export default function Button({
  children,
  className = "",
  variant = "primary",
  size = "lg",
  icon = "arrow",
  iconPosition = "right",
  iconOnly = false,
  "aria-label": ariaLabel,
  href,
  onClick,
  type = "button",
}: CommonProps) {
  const glyphClassName = `h-[46%] w-[46%] ${
    variant === "secondary" ? "text-black group-hover:text-white" : "text-white"
  }`;

  const iconMark = (
    <span
      className={`relative z-10 flex shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${iconWrapStyles[variant]} ${iconSizeStyles[size]}`}
    >
      {icon === "phone" ? (
        <PhoneIcon className={glyphClassName} />
      ) : icon === "chat" ? (
        <ChatIcon className={glyphClassName} />
      ) : (
        <Image
          src="/icons/Arrow_Right.png"
          alt=""
          width={18}
          height={18}
          className={`h-[45%] w-[45%] transition-all duration-300 ease-out group-hover:-rotate-45 ${iconStyles[variant]}`}
        />
      )}
    </span>
  );

  const content = iconOnly ? (
    <>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 scale-0 opacity-0 rounded-full bg-brand-red transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100`}
      />
      {iconMark}
    </>
  ) : (
    <>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 scale-0 opacity-0 rounded-full bg-brand-red transition-all duration-500 ease-out group-hover:scale-[35] group-hover:opacity-100 ${iconOffsetStyles[iconPosition][size]} ${iconSizeStyles[size]}`}
      />

      {iconPosition === "left" ? iconMark : null}

      <span
        className={`relative z-10 whitespace-nowrap font-heading font-semibold tracking-[-0.02em] transition-colors duration-300 ${labelStyles[variant]}`}
      >
        {children}
      </span>

      {iconPosition === "right" ? iconMark : null}
    </>
  );

  const classes = `group relative inline-flex items-center justify-center overflow-hidden rounded-full transition-all duration-300 active:scale-[0.96] ${variantStyles[variant]} ${
    iconOnly ? iconOnlySizeStyles[size] : sizeStyles[iconPosition][size]
  } ${className}`;
  const isExternal = Boolean(href && /^https?:\/\//i.test(href));
  const isDirectHref = Boolean(href && /^(tel:|mailto:)/i.test(href));
  const resolvedAriaLabel =
    ariaLabel || (typeof children === "string" ? children : undefined);

  if (href) {
    if (isExternal || isDirectHref) {
      return (
        <a
          href={href}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={classes}
          aria-label={resolvedAriaLabel}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        aria-label={resolvedAriaLabel}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      className={classes}
      aria-label={resolvedAriaLabel}
    >
      {content}
    </button>
  );
}
