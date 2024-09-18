import { twMerge } from "tailwind-merge";
import writingIcon from "../assets/writing.svg";
import RealEstateSales from "../components/contract/RealEstateSales";
const CreateContract = () => {
  return (
    <div className="bg-[#F7F8F9] w-full h-[100vh] p-[24px] flex flex-col gap-[24px]">
      <div className="flex items-center gap-[8px] text-[20px] font-semibold">
        <img src={writingIcon} alt="계약서 작성 아이콘" />
        <h1>계약서 작성</h1>
      </div>
      <div className="flex items-center gap-[10px]">
        <button
          className={twMerge(
            "rounded-[30px] border border-[#335995] bg-[#335995] text-[#335995] bg-opacity-30 px-[10px] py-[4px]"
          )}
        >
          계약서
        </button>
        <button
          className={twMerge(
            "rounded-[30px] border border-[#CCCCCC] text-[#8894A0] bg-opacity-30 px-[10px] py-[4px]"
          )}
        >
          중개대상물 확인서
        </button>
        <button
          className={twMerge(
            "rounded-[30px] border border-[#CCCCCC] text-[#8894A0] bg-opacity-30 px-[10px] py-[4px]"
          )}
        >
          영수증
        </button>
      </div>
      <RealEstateSales />
    </div>
  );
};
export default CreateContract;
