import { useState } from "react";
import Checkbox from "./Checkbox";
import RegisterCircle from "./RegisterCircle";
import { twMerge } from "tailwind-merge";

const RegisterList = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <li
      className={twMerge(
        "w-full h-[58px] flex items-center border border-[#8894a0]",
        isChecked && "border-2 border-[#347fff]"
      )}
    >
      <div className='flex items-center relative gap-4'>
        <Checkbox type='checkbox' onClick={handleCheckbox}>
          {/* 임시 data */}
          <div className='flex items-center gap-6'>
            <RegisterCircle text='등기' />
            <span className='font-noto-sans-kr text-[#6f6f6f]'>
              서울특별시 서초구 강남대로34길 66-4 [양재동 8-26]
            </span>
          </div>
        </Checkbox>
      </div>
    </li>
  );
};
export default RegisterList;
