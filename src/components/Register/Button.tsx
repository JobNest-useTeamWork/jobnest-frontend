import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

type ButtonType = ComponentPropsWithoutRef<"button">;

const Button = ({ children, className, ...rest }: ButtonType) => {
  return (
    <button
      className={twMerge(
        "w-full h-full bg-[#347FFF] text-white font-medium text-lg leading-[22.46px] tracking-[-0.01em] shrink-0",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
