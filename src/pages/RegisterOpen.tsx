import { RegisterOpenTitleData } from "../components/register/data/title";
import Checkbox from "../components/register/Checkbox";
import Button from "../components/register/Button";
import { RegisterType } from "../types/register";
import { useRegisterStore } from "../store/registerStore";
import { titleHeader } from "../components/register/data/table";
import SelectBox from "../components/register/SelectBox";
import { useForm } from "react-hook-form";
import RegisterWrapper from "../components/register/RegisterWrapper";

export interface OpenedRegisterType extends RegisterType {
  serial_number: string;
  owner: string;
  changed: "있음" | "없음";
  createdAt: string;
}

const SELECT_DATA = [
  { id: 1, name: "10개씩" },
  { id: 2, name: "50개씩" },
  { id: 3, name: "100개씩" },
];

const RegisterOpen = () => {
  const openedRegister = useRegisterStore((state) => state.openedRegister);
  const { register } = useForm();

  return (
    <RegisterWrapper titleData={RegisterOpenTitleData}>
      <div className='flex items-center justify-end mx-10 my-3 gap-[10px]'>
        <Button className='w-[66px] h-[34px] rounded-md border border-[#cccccc] bg-white font-noto-sans-kr font-normal text-sm text-black'>
          삭제
        </Button>
        <SelectBox
          className='w-32 h-[34px] px-2 border border-[#cccccc] rounded-md text-sm text-[#6f6f6f]'
          register={register("register_open_count")}
          selectData={SELECT_DATA}
        ></SelectBox>
      </div>
      <table className='text-sm text-center mx-10'>
        <thead>
          <tr>
            {titleHeader.map((item) => {
              if (item === "체크") {
                return (
                  <th className='h-[30px] px-1 border border-[#7f7f7f]'>
                    <Checkbox type='checkbox'></Checkbox>
                  </th>
                );
              } else {
                return <th className='px-2 border border-[#7f7f7f]'>{item}</th>;
              }
            })}
          </tr>
        </thead>
        <tbody className='border-b border-[#7f7f7f]'>
          {openedRegister.map((register) => {
            const registerData = [
              <Checkbox type='checkbox' />,
              register.type,
              register.id,
              register.address,
              register.owner,
              register.changed,
              register.createdAt,
              (register.type === "등기" || register.type === "등기 + 대장") && (
                <Button className='w-[68px] h-6 text-sm'>열람</Button>
              ),
              (register.type === "등기" || register.type === "등기 + 대장") && (
                <Button className='w-[68px] h-6 text-sm'>작성</Button>
              ),
              <Button className='w-[68px] h-6 text-sm'>다운로드</Button>,
            ];

            return (
              <tr key={register.id}>
                {registerData.map((data) => (
                  <td className='h-[30px] border-r border-l p-2 border-[#7f7f7f]'>
                    {data}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </RegisterWrapper>
  );
};
export default RegisterOpen;
