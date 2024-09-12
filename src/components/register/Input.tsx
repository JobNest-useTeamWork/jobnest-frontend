import { ComponentPropsWithRef } from "react";
import { IoMdClose } from "react-icons/io";

interface InputType extends ComponentPropsWithRef<"input"> {
  type: "text";
  register: {
    name: string;
  };
  resetField: () => void;
}

const Input = ({ register, resetField, ...rest }: InputType) => {
  return (
    <div className='relative w-full h-full border border-[#cccccc]'>
      <input className='w-full h-full px-4' {...register} {...rest} />
      <IoMdClose
        className='absolute top-1/2 -translate-y-1/2 right-2 text-2xl text-[#6f6f6f] cursor-pointer'
        onClick={resetField}
      />
    </div>
  );
};
export default Input;
