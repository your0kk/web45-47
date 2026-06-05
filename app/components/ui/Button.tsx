import type { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * Reusable button component.  It accepts all standard HTML button
 * attributes via the generics on ButtonHTMLAttributes and a variant
 * prop used to style the button appropriately.  The default variant
 * renders a green call‑to‑action style button, while the secondary
 * variant renders a more subdued outline style button.
 */
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual variant of the button.  'primary' creates a solid
   * coloured button, 'secondary' creates an outlined button.
   */
  variant?: "primary" | "secondary";
  /** Content to render inside the button */
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClass =
    "inline-flex items-center justify-center py-2 px-4 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  const variants: Record<string, string> = {
    primary:
      "bg-green-600 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-500",
    secondary:
      "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300"
  };
  const classes = `${baseClass} ${variants[variant]} ${className}`;
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}