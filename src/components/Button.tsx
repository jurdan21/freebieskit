import React from "react";
import Link from "next/link";

type ButtonSize = "large" | "small";

type AnchorProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  size?: ButtonSize;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
  children: React.ReactNode;
  className?: string;
  size?: ButtonSize;
};

export default function Button(props: AnchorProps | ButtonProps) {
  const {
    size = "large",
    className = "",
    children,
    ...rest
  } = props;

  const sizeClass =
    size === "small"
      ? "px-4 py-1"
      : "px-5 py-3"; // large: px-5 (20px), py-3 (12px)

  const baseClass =
    `${sizeClass} rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium shadow hover:from-blue-600 hover:to-blue-800 transition`;

  if ("href" in props && props.href) {
    const { href, target, rel, ...anchorProps } = rest as AnchorProps;
    return (
      <Link href={href} className={`${baseClass} ${className}`} target={target} rel={rel} {...anchorProps}>
        {children}
      </Link>
    );
  } else {
    const buttonProps = rest as ButtonProps;
    return (
      <button className={`${baseClass} ${className}`} {...buttonProps}>
        {children}
      </button>
    );
  }
} 