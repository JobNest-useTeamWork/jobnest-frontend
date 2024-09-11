interface SelectboxType extends React.ComponentPropsWithoutRef<"select"> {
  selectData: {
    id: number;
    name: string;
  }[];
  register: {
    name: string;
  };
}

const SelectBox = ({ selectData, register, ...rest }: SelectboxType) => {
  return (
    <select
      className='font-suit w-28 h-full border border-[#cccccc]'
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
