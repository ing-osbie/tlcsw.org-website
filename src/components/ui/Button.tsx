import React from "react";
import Link from "next/link";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "light"
  | "outline-light";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-terracotta text-white hover:bg-terracotta-hover hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.97] transition-all duration-300 ease-out focus-visible:ring-terracotta shadow-xs",
  secondary:
    "bg-espresso text-cream-light hover:bg-espresso-surface hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.97] transition-all duration-300 ease-out focus-visible:ring-espresso shadow-xs",
  outline:
    "border border-espresso/25 text-espresso hover:border-espresso hover:bg-espresso/[0.04] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] transition-all duration-300 ease-out focus-visible:ring-espresso",
  ghost:
    "text-espresso hover:text-terracotta hover:bg-espresso/[0.04] active:scale-[0.97] transition-all duration-200 focus-visible:ring-espresso",
  light:
    "bg-cream-light text-espresso hover:bg-white hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.97] transition-all duration-300 ease-out focus-visible:ring-white shadow-xs",
  "outline-light":
    "border border-white/40 text-cream hover:border-white hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] transition-all duration-300 ease-out focus-visible:ring-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs tracking-wider uppercase font-medium px-4 py-2 rounded-full gap-1.5",
  md: "text-sm tracking-wide font-medium px-6 py-3 rounded-full gap-2",
  lg: "text-base tracking-wide font-medium px-8 py-3.5 rounded-full gap-2.5",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  children,
  icon,
  iconPosition = "right",
  className = "",
  type = "button",
  ...props
}) => {
  const baseClasses =
    "group inline-flex items-center justify-center select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all";
  const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="inline-flex shrink-0 items-center transition-transform duration-300 ease-out group-hover:-translate-x-1">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="inline-flex shrink-0 items-center transition-transform duration-300 ease-out group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
