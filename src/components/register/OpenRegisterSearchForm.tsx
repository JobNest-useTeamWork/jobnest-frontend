import Button from "./Button";
import Input from "./Input";
import SelectBox from "./SelectBox";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRegisterStore } from "../../store/registerStore";
import { useEffect } from "react";

const SELECT_DATA = [
  { id: 1, name: "전체" },
  { id: 2, name: "등기" },
  { id: 3, name: "대장" },
];

type SearchOpenedRegisterInputs = {
  register_type: string;
  address: string;
};

const OpenRegisterSearchForm = () => {
  const { handleSubmit, register, resetField, watch } =
    useForm<SearchOpenedRegisterInputs>({
      mode: "onChange",
    });
  const setSearchOpenRegisterData = useRegisterStore(
    (state) => state.setSearchOpenRegisterData
  );

  useEffect(() => {
    if (watch("address") === "") {
      setSearchOpenRegisterData({
        address: "",
        register_type: "",
      });
    }
  }, [watch("address")]);

  // 등기 또는 대장 검색
  const onSubmitSearchAddress: SubmitHandler<SearchOpenedRegisterInputs> = (
    data
  ) => {
    setSearchOpenRegisterData({
      address: data.address,
      register_type: data.register_type,
    });
  };

  // resetField와 동시에 SearchOpenRegisterData 초기화
  const handleResetField = (fieldName: keyof SearchOpenedRegisterInputs) => {
    resetField(fieldName); // 기존 resetField 호출
    setSearchOpenRegisterData({
      address: "",
      register_type: "",
    }); // setSearchOpenRegisterData 초기화
  };

  return (
    <form
      className='max-w-[1264px] h-[68px] flex items-center gap-4 mb-[60px] mx-5 p-3 bg-[#f7f7f8]'
      onSubmit={handleSubmit(onSubmitSearchAddress)}
    >
      <SelectBox
        selectData={SELECT_DATA}
        register={register("register_type")}
        className='w-32'
      ></SelectBox>
      <div className='w-full h-full'>
        <Input
          type='text'
          placeholder='주소를 입력해주세요.'
          register={register("address")}
          resetField={() => handleResetField("address")}
        />
      </div>
      <Button className='w-24 rounded-md'>검색</Button>
    </form>
  );
};
export default OpenRegisterSearchForm;
