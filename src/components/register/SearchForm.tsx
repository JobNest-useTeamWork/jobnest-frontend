import { useRegisterStore } from "../../store/registerStore";
import { SearchRegisterInputs } from "../../types/registerInputType";
import Button from "./Button";
import Input from "./Input";
import SelectBox from "./SelectBox";
import { SubmitHandler, useForm } from "react-hook-form";

const SearchForm = () => {
  const { handleSubmit, register } = useForm<SearchRegisterInputs>({
    mode: "onChange",
  });

  const setSearchedRegister = useRegisterStore(
    (state) => state.setSearchedRegister
  );

  // 등기 또는 대장 검색
  const onSubmitSearchAddress: SubmitHandler<SearchRegisterInputs> = (data) => {
    console.log("search register data");

    // 검색한 data를 통해 DB에서 리스트를 불러오는 함수 필요
    // 임시로 검색한 데이터 값을 넣었다.
    // 불러온 데이터는 store의 searchedRegister에 저장해야한다.
    setSearchedRegister([data]);
  };

  return (
    <form
      className='w-full h-11 flex items-center gap-4'
      onSubmit={handleSubmit(onSubmitSearchAddress)}
    >
      <SelectBox register={register("register_type")}></SelectBox>
      <Input
        type='text'
        placeholder='주소를 입력해주세요.'
        register={register("address")}
      />
      <Button className='w-24 rounded-md'>검색</Button>
    </form>
  );
};
export default SearchForm;
