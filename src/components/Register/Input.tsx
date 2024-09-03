import { ComponentPropsWithoutRef } from "react";

interface InputType extends ComponentPropsWithoutRef<"input"> {
  type: "text";
}

const Input = ({ ...rest }: InputType) => {
  return (
    <input className='w-full h-full px-4 border border-[#cccccc]' {...rest} />
  );
};
export default Input;
