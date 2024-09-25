import { IoAlertCircleOutline } from "react-icons/io5";
import ConfirmTopFirstTable from "./ConfirmTopFirstTable";
import ConfirmTopSecondTable from "./ConfirmTopSecondTable";
import ConfirmFirstTable from "./ConfirmFirstTable";
import ConfirmSecondTable from "./ConfirmSecondTable";

const ContractConfirm = () => {
  return (
    <div className="flex flex-col gap-[40px]">
      {/* Title */}
      <h1 className="text-[40px] text-center font-medium border border-[#CCCCCC] rounded-[6px]">
        중개대상물 확인 · 설명서[I](주거용 건축물)
      </h1>
      {/* Type Select */}
      <section className="flex-col center-place text-[28px]">
        <div className="flex gap-[10px] items-center">
          <span>( 주택 유형 : </span>
          <div className="flex items-center gap-[4px]">
            <input type="radio" />
            <label htmlFor="">단독주택</label>
          </div>
          <div className="flex items-center gap-[4px]">
            <input type="radio" />
            <label htmlFor="">공동주택</label>
          </div>
          <div className="flex items-center gap-[4px]">
            <input type="radio" />
            <label htmlFor="">주거용 오피스텔</label>
          </div>
          <span> )</span>
          <IoAlertCircleOutline />
        </div>
        <div className="flex gap-[10px] ">
          <span>( 거래 형태 : </span>
          <div className="flex items-center gap-[4px]">
            <input type="radio" />
            <label htmlFor="">매매·교환</label>
          </div>
          <div className="flex items-center gap-[4px]">
            <input type="radio" />
            <label htmlFor="">임대</label>
          </div>
          <span> )</span>
        </div>
      </section>
      <ConfirmTopFirstTable />
      <ConfirmTopSecondTable />
      <section>
        <h3 className="text-[20px]">1. 개업공인중개사 기본 확인사항</h3>
        <ConfirmFirstTable />
        <ConfirmSecondTable />
      </section>
    </div>
  );
};
export default ContractConfirm;
