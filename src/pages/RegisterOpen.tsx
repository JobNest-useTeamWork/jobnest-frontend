import Button from "../components/register/Button";
import { OpenedRegisterAPIType } from "../types/register";
import SelectBox from "../components/register/SelectBox";
import { useForm } from "react-hook-form";
import RegisterWrapper from "../components/register/RegisterWrapper";
import Checkbox from "../components/register/Checkbox";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/register/LoadingSpinner";

const SELECT_DATA = [
  { id: 1, name: "10개씩" },
  { id: 2, name: "50개씩" },
  { id: 3, name: "100개씩" },
];

const RegisterOpenTitleData = {
  title: "등기/대장 열람내역",
  desc: "",
};

const titleHeader = [
  "체크",
  "구분",
  "고유번호",
  "주소",
  "소유자",
  "변동정보",
  "열람 날짜",
  "등기 신규 열람",
  "계약서 작성",
  "다운로드",
];

const RegisterOpen = () => {
  const readLocalStorageRegister = () => {
    const localStorageRegister = localStorage.getItem("openedRegisters");

    return localStorageRegister ? JSON.parse(localStorageRegister) : [];
  };

  const [localRegister, setLocalRegister] = useState<OpenedRegisterAPIType>(
    readLocalStorageRegister
  );
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  useEffect(() => {
    setLocalRegister((prev) => ({
      ...prev,
      result: prev.result.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      ),
    }));
  }, []);

  useEffect(() => {
    localStorage.setItem("openedRegisters", JSON.stringify(localRegister));
  }, [localRegister]);

  useEffect(() => {
    // const findCheckedItem = localRegister.result.some((item) => item.isChecked);
    const findUnCheckedItem = localRegister.result.every(
      (item) => item.isChecked
    );

    setIsCheckedAll(findUnCheckedItem);
  }, [localRegister]);

  // pdf-list API 사용 로직
  // const [openedRegister, setOpenedRegister] = useState<OpenedRegisterAPIType>();

  // useEffect(() => {
  //   checkOpenedRegister().then((data) => {
  //     setOpenedRegister(data);
  //   });
  // }, []);

  const { register } = useForm();

  const getCurrentDate = (now: Date) => {
    const date = new Date(now);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const handlePrintPdf = (pdf_url: string) => {
    window.open(
      pdf_url,
      "_blank",
      "width=800, height=600, toolbar=no, scrollbars=yes, resizable=yes"
    );
  };

  const handleDeleteRow = () => {
    console.log("delete");
    setLocalRegister((prev) => ({
      ...prev,
      result: prev.result.filter((item) => !item.isChecked),
    }));
  };

  const toggleCheckbox = (unique: string) => {
    setLocalRegister((prev) => ({
      ...prev,
      result: prev.result.map((item) =>
        item.unique === unique ? { ...item, isChecked: !item.isChecked } : item
      ),
    }));
  };

  const toggleCheckboxAll = () => {
    setIsCheckedAll((prev) => !prev);

    setLocalRegister((prev) => ({
      ...prev,
      result: prev.result.map((item) => ({
        ...item,
        isChecked: !isCheckedAll,
      })),
    }));
  };

  return (
    <div className='p-[50px]'>
      <RegisterWrapper titleData={RegisterOpenTitleData}>
        {localRegister ? (
          <>
            <div className='flex items-center justify-end max-w-[1264px] mx-10 my-3 gap-[10px]'>
              <Button
                onClick={handleDeleteRow}
                className='w-[66px] h-[34px] rounded-md border border-[#cccccc] bg-white font-noto-sans-kr font-normal text-sm text-black'
              >
                삭제
              </Button>
              <SelectBox
                className='w-32 h-[34px] px-2 border border-[#cccccc] rounded-md text-sm text-[#6f6f6f]'
                register={register("register_open_count")}
                selectData={SELECT_DATA}
              ></SelectBox>
            </div>
            <div className='max-w-[1264px] mx-10'>
              <table className='text-sm text-center w-full'>
                <thead>
                  <tr className='h-[30px]'>
                    {titleHeader.map((item) => {
                      if (item === "체크") {
                        return (
                          <th className='border border-[#7f7f7f] px-1 translate-y-0.5'>
                            <Checkbox
                              type='checkbox'
                              onClick={toggleCheckboxAll}
                              checked={isCheckedAll}
                            ></Checkbox>
                          </th>
                        );
                      } else {
                        return (
                          <th className='px-2 border border-[#7f7f7f]'>
                            {item}
                          </th>
                        );
                      }
                    })}
                  </tr>
                </thead>
                <tbody className='border-b border-[#7f7f7f]'>
                  {localRegister?.result.map((item) => {
                    const registerData = [
                      <Checkbox
                        type='checkbox'
                        checked={item.isChecked}
                        onClick={() => toggleCheckbox(item.unique)}
                      />,
                      item.register_type,
                      item.unique,
                      item.juso,
                      item.owner.join(", "),
                      item.is_change ? "있음" : "없음",
                      getCurrentDate(item.created_at),
                      item.register_type?.includes("등기") ? (
                        <Button className='w-[68px] h-6 text-sm'>열람</Button>
                      ) : (
                        "-"
                      ),
                      item.register_type?.includes("등기") ? (
                        <Button className='w-[68px] h-6 text-sm'>작성</Button>
                      ) : (
                        "-"
                      ),
                      <Button
                        className='w-[68px] h-6 text-sm'
                        onClick={() => handlePrintPdf(item.pdf_url)}
                      >
                        다운로드
                      </Button>,
                    ];

                    return (
                      <tr key={item.id}>
                        {registerData.map((data) => (
                          <td className='h-[30px] max-w-[310px] border-r border-l p-2 border-[#7f7f7f]'>
                            {data}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <LoadingSpinner />
        )}
      </RegisterWrapper>
    </div>
  );
};
export default RegisterOpen;
