import { RegisterAPIType, SearchRegisterInputs } from "../../types/register";
import Button from "./Button";
import Input from "./Input";
import SelectBox from "./SelectBox";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRegisterStore } from "../../store/registerStore";
import { searchRegister } from "../../api/register";

const SELECT_DATA = [
  { id: 1, name: "등기 + 대장" },
  { id: 2, name: "등기" },
  { id: 3, name: "대장" },
];

const SearchForm = () => {
  const { handleSubmit, register, resetField, watch } =
    useForm<SearchRegisterInputs>({
      mode: "onChange",
    });

  const addSearchRegister = useRegisterStore(
    (state) => state.addSearchRegister
  );
  const setSearchData = useRegisterStore((state) => state.setSearchData);

  // 등기 또는 대장 검색
  const onSubmitSearchAddress: SubmitHandler<SearchRegisterInputs> = (data) => {
    setSearchData({
      address: data.address,
      register_type: data.register_type,
    });

    // API에서 주소 검색 후 받아온 data를 searchedRegister에 등록
    searchRegister(data.address, 1).then((data: RegisterAPIType) => {
      addSearchRegister(data, watch("register_type"));
    });
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
