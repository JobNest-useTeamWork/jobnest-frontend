import { twMerge } from "tailwind-merge";

interface SelectboxType extends React.ComponentPropsWithoutRef<"select"> {
  selectData: {
    id: number;
    name: string;
  }[];
  register: {
    name: string;
  };
}

const SelectBox = ({
  selectData,
  register,
  className,
  ...rest
}: SelectboxType) => {
  return (
    <select
      className={twMerge(
        "font-suit h-full px-2 border border-[#cccccc]",
        className
      )}
      {...register}
      {...rest}
    >
      {selectData.map((option) => (
        <option key={option.id}>{option.name}</option>
      ))}
    </select>
  );
};
export default SelectBox;
