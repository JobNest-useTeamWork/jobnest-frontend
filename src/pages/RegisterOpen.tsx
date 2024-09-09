import { RegisterOpenTitleData } from "../components/register/data/title";
import RegisterLayout from "../layouts/RegisterLayout";
import Checkbox from "../components/register/Checkbox";
import Button from "../components/register/Button";
import { RegisterType } from "../types/register";
import { useRegisterStore } from "../store/registerStore";
import { titleHeader } from "../components/register/data/table";

export interface OpenedRegisterType extends RegisterType {
  serial_number: string;
  owner: string;
  changed: "있음" | "없음";
  createdAt: string;
}

const RegisterOpen = () => {
  const openedRegister = useRegisterStore((state) => state.openedRegister);

  return (
    <RegisterLayout titleData={RegisterOpenTitleData}>
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
        <tbody>
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
                  <td className='h-[30px] px-1 border border-[#7f7f7f]'>
                    {data}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </RegisterLayout>
  );
};
export default RegisterOpen;
