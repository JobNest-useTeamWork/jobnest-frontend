import { useState } from "react";
import Checkbox from "./Checkbox";
import { twMerge } from "tailwind-merge";
import RegisterListContent from "./RegisterListContent";
import { RegisterType } from "../../types/register";

type RegisterListProps = {
  item: RegisterType;
};

const RegisterList = ({ item }: RegisterListProps) => {
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
          <RegisterListContent type={item.type} address={item.address} />
        </Checkbox>
      </div>
    </li>
  );
};
export default RegisterList;
