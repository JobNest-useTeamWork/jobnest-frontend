import { ComponentPropsWithoutRef, useId } from "react";
import { twMerge } from "tailwind-merge";

interface CheckboxType extends Omit<ComponentPropsWithoutRef<"input">, "id"> {
  type: "checkbox";
}

const TodoCheckbox = ({ className, children, ...rest }: CheckboxType) => {
  const uid = useId();

  return (
    <>
      <input
        id={uid}
        className={twMerge(
          "appearance-none w-4 h-4  rounded bg-[url('/check.svg')] bg-no-repeat bg-center checked:bg-[url('/check_black.svg')] shrink-0",
          className
        )}
        {...rest}
      />
      <label
        htmlFor={uid}
        className="font-noto-sans-kr text-sm font-normal leading-[14px]"
      >
        {children}
      </label>
    </>
  );
};
export default TodoCheckbox;
