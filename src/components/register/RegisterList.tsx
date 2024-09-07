import Checkbox from "./Checkbox";
import { twMerge } from "tailwind-merge";
import RegisterListContent from "./RegisterListContent";
import { RegisterType } from "../../types/register";
import { useRegisterStore } from "../../store/registerStore";

type RegisterListProps = {
  item: RegisterType;
};

const RegisterList = ({ item }: RegisterListProps) => {
  const toggleCheckbox = useRegisterStore((state) => state.toggleCheckbox);

  const handleCheckbox = (id: number) => {
    toggleCheckbox(id);
  };

  return (
    <li
      className={twMerge(
        "w-full h-[58px] flex items-center border border-[#8894a0]",
        item.isChecked && "border-2 border-[#347fff]"
      )}
    >
      <div className='flex items-center relative gap-4'>
        <Checkbox
          type='checkbox'
          onClick={() => handleCheckbox(item.id)}
          checked={item.isChecked}
        >
          <RegisterListContent type={item.type} address={item.address} />
        </Checkbox>
      </div>
    </li>
  );
};
export default RegisterList;
