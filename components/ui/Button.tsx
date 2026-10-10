"use client";

import Link from "next/link";
import Image from "next/image";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary";
  size?: "lg" | "md";
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: "button" | "submit" | "reset";
};

const sizeStyles: Record<NonNullable<CommonProps["size"]>, string> = {
  lg: "h-[60px] pl-[30px] pr-[10px] text-[18px] gap-[38px]",
  md: "h-[52px] pl-[26px] pr-[8px] text-[15.6px] gap-[30px]",
};

const iconSizeStyles: Record<NonNullable<CommonProps["size"]>, string> = {
  lg: "size-[40px]",
  md: "size-[35px]",
};

const iconRightOffset: Record<NonNullable<CommonProps["size"]>, string> = {
  lg: "right-[10px]",
  md: "right-[8px]",
};

export default function Button({
  children,
  className = "",
  size = "lg",
  href,
  onClick,
  type = "button",
}: CommonProps) {
  const content = (
    <>
      {/* Expanding Red Circle Layer from the Black Circle */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 scale-0 opacity-0 rounded-full bg-brand-red transition-all duration-500 ease-out group-hover:scale-[35] group-hover:opacity-100 ${iconRightOffset[size]} ${iconSizeStyles[size]}`}
      />

      {/* Button Label */}
      <span className="relative z-10 whitespace-nowrap font-heading font-semibold tracking-[-0.02em] text-black transition-colors duration-300 group-hover:text-white">
        {children}
      </span>

      {/* Circle Icon Container */}
      <span
        className={`relative z-10 flex shrink-0 items-center justify-center rounded-full bg-[#111111] transition-colors duration-300 group-hover:bg-transparent ${iconSizeStyles[size]}`}
      >
        <Image
          src="/icons/Arrow_Right.png"
          alt=""
          width={18}
          height={18}
          className="h-[45%] w-[45%] transition-transform duration-300 ease-out group-hover:-rotate-45 group-hover:scale-105"
        />
      </span>
    </>
  );

  const classes = `group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white transition-all duration-300 hover:scale-105 active:scale-[0.96] ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
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
    >
      {content}
    </button>
  );
}