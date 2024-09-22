import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useRegisterStore } from "../../store/registerStore";
import RegisterListContent from "./RegisterListContent";
import { OpenedRegisterAPIType, RegisterType } from "../../types/register";
import { useEffect, useState } from "react";

const SelectedDetail = () => {
  const searchedRegister = useRegisterStore((state) => state.searchedRegister);
  const checkedRegister = searchedRegister.result.filter(
    (item) => item.isChecked === true
  );

  const navigate = useNavigate();

  const [registersUpdated, setRegistersUpdated] = useState(false);

  // registersUpdated가 true로 바뀔 때 navigate 호출
  useEffect(() => {
    if (registersUpdated) {
      navigate("/register/open");
    }
  }, [registersUpdated, navigate]);

  // 로컬스토리지에서 열람된 등기대장 불러오기
  const readRegisters = () => {
    const localRegisters = localStorage.getItem("openedRegisters");

    return localRegisters ? JSON.parse(localRegisters) : { result: [] };
  };

  // 로컬스토리지 등기대장
  const [localRegisters, setLocalRegisters] =
    useState<OpenedRegisterAPIType>(readRegisters);

  // 로컬스토리지 등기대장이 변경되면 openedRegisters에 저장하기
  useEffect(() => {
    localStorage.setItem("openedRegisters", JSON.stringify(localRegisters));
  }, [localRegisters]);

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  // 등기대장 구조 변경
  const transformRegisters = (registers: RegisterType[]) => {
    return {
      result: registers.map((registers) => ({
        id: registers.unique,
        register_type: registers.register_type,
        category: "-",
        unique: registers.unique,
        juso: registers.address,
        owner: ["-"],
        is_change: false,
        pdf_url: "",
        created_at: getCurrentDate(),
      })),
    };
  };

  const addRegister = () => {
    // 선택된 등기대장을 로컬스토리지 등기대장에 추가
    setLocalRegisters((prev) => {
      return {
        ...prev,
        result: [...prev.result, ...transformRegisters(checkedRegister).result],
      };
    });

    // 상태 업데이트가 완료된 후 navigate 호출을 위한 state 변경
    setRegistersUpdated(true);
  };

  const handleOpenRegister = () => {
    addRegister();
  };

  return (
    <div className='flex flex-col w-[443px] bg-[#f2f2f2] shrink-0 py-10 px-5 animate-slideInFromRightToLeft'>
      <div className='flex items-center gap-10 mb-10'>
        <p className='font-inter font-bold text-xl text-[#151515] leading-[24.2px]'>
          선택
        </p>
        <p className='flex items-center font-inter font-normal text-sm leading-[16.94px] text-[#151515]'>
          <span className='pr-1'>총</span>
          <span>
            {
              searchedRegister.result.filter((item) => item.isChecked === true)
                .length
            }
          </span>
          <span>개</span>
        </p>
      </div>

      <ul className='flex flex-col gap-2 mb-10 flex-grow'>
        {checkedRegister.map((item) => (
          <RegisterListContent
            register_type={item.register_type}
            address={item.address}
          />
        ))}
      </ul>

      <Button className='h-11 mt-auto' onClick={handleOpenRegister}>
        열람하기
      </Button>
    </div>
  );
};
export default SelectedDetail;
