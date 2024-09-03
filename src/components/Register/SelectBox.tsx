const REGISTER_SELECTBOX_DATA = [
  {
    id: 1,
    name: "등기 + 대장",
  },
  {
    id: 2,
    name: "등기",
  },
  {
    id: 3,
    name: "대장",
  },
];

const SelectBox = () => {
  return (
    <select className='font-suit w-28 h-full border border-[#cccccc]'>
      {REGISTER_SELECTBOX_DATA.map((option) => (
        <option key={option.id}>{option.name}</option>
      ))}
    </select>
  );
};
export default SelectBox;
