import { useRegisterStore } from "../../store/registerStore";
import { SearchRegisterInputs } from "../../types/register";
import Button from "./Button";
import Input from "./Input";
import SelectBox from "./SelectBox";
import { SubmitHandler, useForm } from "react-hook-form";

const SELECT_DATA = [
  { id: 1, name: "등기 + 대장" },
  { id: 2, name: "등기" },
  { id: 3, name: "대장" },
];

const SearchForm = () => {
  const { handleSubmit, register, resetField } = useForm<SearchRegisterInputs>({
    mode: "onChange",
  });
  const searchRegister = useRegisterStore((state) => state.searchRegister);

  // 등기 또는 대장 검색
  const onSubmitSearchAddress: SubmitHandler<SearchRegisterInputs> = (data) => {
    searchRegister(data);
  };

  return (
    <form
      className='max-w-[1264px] h-11 flex items-center gap-4 mb-[100px] mx-10'
      onSubmit={handleSubmit(onSubmitSearchAddress)}
    >
      <SelectBox
        selectData={SELECT_DATA}
        register={register("register_type")}
      ></SelectBox>
      <Input
        type='text'
        placeholder='주소를 입력해주세요.'
        register={register("address")}
        resetField={() => resetField("address")}
      />
      <Button className='w-24 rounded-md'>검색</Button>
    </form>
  );
};
export default SearchForm;
