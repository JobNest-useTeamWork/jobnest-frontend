import { ComponentPropsWithRef } from "react";

interface InputType extends ComponentPropsWithRef<"input"> {
  type: "text";
  register: {
    name: string;
  };
}

const Input = ({ register, ...rest }: InputType) => {
  return (
    <input
      className='w-full h-full px-4 border border-[#cccccc]'
      {...register}
      {...rest}
    />
  );
};
export default Input;
