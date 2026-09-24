"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
      <span className="whitespace-nowrap font-heading font-semibold tracking-[-0.02em] text-black">
        {children}
      </span>
      <span
        className={`flex shrink-0 items-center justify-center rounded-full bg-[#111111] transition-transform duration-300 group-hover:rotate-45 ${iconSizeStyles[size]}`}
      >
        <Image
          src="/icons/Arrow_Right.png"
          alt=""
          width={18}
          height={18}
          className="h-[45%] w-[45%] "
        />
      </span>
    </>
  );

  const classes = `group inline-flex items-center justify-center rounded-full bg-white transition-all duration-300 hover:bg-white/95 hover:shadow-[0_10px_25px_rgba(255,255,255,0.25)] ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="inline-block"
      >
        <Link
          href={href}
          className={classes}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={classes}
    >
      {content}
    </motion.button>
  );
}