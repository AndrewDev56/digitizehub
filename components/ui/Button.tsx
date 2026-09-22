import Link from "next/link";
import Image from "next/image";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary";
  size?: "lg" | "md";
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

type ButtonProps = ButtonAsLink | ButtonAsButton;

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
  ...props
}: ButtonProps) {
  const content = (
    <>
      <span className="whitespace-nowrap font-heading font-semibold tracking-[-0.02em] text-black">
        {children}
      </span>
      <span
        className={`flex shrink-0 items-center justify-center rounded-full bg-[#111111] ${iconSizeStyles[size]}`}
      >
        <Image
          src="/icons/arrow_right.png"
          alt=""
          width={18}
          height={18}
          className="h-[45%] w-[45%]"
        />
      </span>
    </>
  );

  const classes = `inline-flex items-center justify-center rounded-full bg-white transition-opacity hover:opacity-90 ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}