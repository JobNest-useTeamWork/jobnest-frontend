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

const ERROR_MESSAGE_REQUIRED = "필수로 입력해야하는 필드입니다.";

const SearchForm = () => {
  const {
    handleSubmit,
    register,
    resetField,
    watch,
    formState: { errors },
  } = useForm<SearchRegisterInputs>({
    mode: "onChange",
  });

  const addSearchRegister = useRegisterStore(
    (state) => state.addSearchRegister
  );
  const setSearchData = useRegisterStore((state) => state.setSearchData);
  const setLoading = useRegisterStore((state) => state.setLoading);

  // 등기 또는 대장 검색
  const onSubmitSearchAddress: SubmitHandler<SearchRegisterInputs> = (data) => {
    setLoading(true);

    setSearchData({
      address: data.address,
      register_type: data.register_type,
    });

    // API에서 주소 검색 후 받아온 data를 searchedRegister에 등록
    searchRegister(data.address, 1)
      .then((data: RegisterAPIType) => {
        if (typeof data.result === "string") {
          alert(data.result);
        }

        addSearchRegister(data, watch("register_type"));
      })
      .finally(() => {
        setLoading(false);
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
      <div className='w-full h-full'>
        <Input
          type='text'
          placeholder='주소를 입력해주세요.'
          className={errors.address && "border-red-500"}
          register={register("address", {
            required: ERROR_MESSAGE_REQUIRED,
          })}
          resetField={() => resetField("address")}
        />
        {errors.address && (
          <p className='text-sm mt-1 text-red-500'>{errors.address?.message}</p>
        )}
      </div>
      <Button className='w-24 rounded-md'>검색</Button>
    </form>
  );
};
export default SearchForm;
