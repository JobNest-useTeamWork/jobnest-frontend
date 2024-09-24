import { ComponentPropsWithRef } from "react";
import { IoMdClose } from "react-icons/io";
import { twMerge } from "tailwind-merge";

interface InputType extends ComponentPropsWithRef<"input"> {
  type: "text";
  register: {
    name: string;
  };
  resetField: () => void;
}

const Input = ({ register, className, resetField, ...rest }: InputType) => {
  return (
    <div
      className={twMerge(
        "relative w-full h-full border border-[#cccccc]",
        className
      )}
    >
      <input className='w-full h-full px-4' {...register} {...rest} />
      <IoMdClose
        className='absolute top-1/2 -translate-y-1/2 right-2 text-2xl text-[#6f6f6f] cursor-pointer'
        onClick={resetField}
      />
    </div>
  );
};
export default Input;
