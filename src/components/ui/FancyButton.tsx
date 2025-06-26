import { FaArrowRight } from "react-icons/fa";
import React from "react";

interface FancyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "small";
}

export const FancyButton: React.FC<FancyButtonProps> = ({
  children,
  className = "",
  icon,
  variant = "primary",
  size = "default",
  ...props
}) => {
  const sizeClasses =
    size === "small"
      ? "px-4 py-2 w-full md:min-w-[180px] h-[44px] text-base"
      : "px-6 py-3 w-full md:min-w-[240px] h-[56px] text-lg";

  const baseClasses = `effect-1 relative overflow-hidden rounded-lg font-roboto transition-all duration-500 ease-in-out group ${sizeClasses}`;

  const variantClasses =
    variant === "primary"
      ? "text-white border border-[#5a6c8a] hover:border-[#4a5a75] bg-[#39496b] hover:bg-[#2d3748]"
      : "text-gray-700 border border-gray-400 hover:border-gray-500 bg-gray-100 hover:bg-gray-200";

  return (
    <button
      {...props}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      <span className="inline-block transition-all duration-500 ease-in-out group-hover:-translate-x-5">
        {children}
      </span>
      <span
        className={`absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-500 ease-in-out flex items-center ${
          variant === "primary" ? "text-white" : "text-gray-700"
        }`}
        aria-hidden="true"
      >
        {icon || <FaArrowRight size={18} />}
      </span>
    </button>
  );
};
