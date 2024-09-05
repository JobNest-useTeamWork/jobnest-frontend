import { useState } from "react";
import Checkbox from "./Checkbox";
import { twMerge } from "tailwind-merge";
import RegisterListContent from "./RegisterListContent";

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
          <RegisterListContent />
        </Checkbox>
      </div>
    </li>
  );
};
export default RegisterList;
