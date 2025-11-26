// src/components/ui/Button.jsx
import React from "react";
import clsx from "clsx"; // optional, npm i clsx (nahi chahiye to normal string bhi use kar sakte ho)

const baseStyles =
  "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 ease-out disabled:opacity-60 disabled:cursor-not-allowed";

const sizeStyles = {
  sm: "px-3 py-1.5 text-xs md:text-sm",
  md: "px-5 py-2 text-sm md:text-base",
  lg: "px-7 py-3 text-base md:text-lg",
};

const variantStyles = {
  // filled primary – tumhara rgb(255,0,128)
  primary:
    "bg-primary text-white hover:bg-primary/90 active:scale-[0.97]",

  // white bg, black border (tumhare video jaisa)
  outline:
    "border border-black text-black hover:bg-black hover:text-white active:scale-[0.97]",

  // sirf text, halka hover bg
  ghost:
    "text-black hover:bg-gray-100 active:scale-[0.97]",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  as = "button",
  ...props
}) => {
  const Component = as; // "button" ya "a" etc.

  return (
    <Component
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
