import { IoAlertCircleOutline } from "react-icons/io5";
import ConfirmTopFirstTable from "./ConfirmTopFirstTable";
import ConfirmTopSecondTable from "./ConfirmTopSecondTable";
// import ConfirmFirstTable from "./ConfirmFirstTable";
import ConfirmSecondTable from "./ConfirmSecondTable";
import ConfirmThirdTable from "./ConfirmThirdTable";

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
      <section className="flex flex-col gap-[20px]">
        <h3 className="text-[20px]">1. 개업공인중개사 기본 확인사항</h3>
        {/* <ConfirmFirstTable /> */}
        <ConfirmSecondTable />
        <ConfirmThirdTable />
        <ul className="list-disc px-5">
          <li>
            주택임대사업자는 「민간임대주택에 관한 특별법」제49조에 따라
            임대보증금에 대한 보증에 가입하여야 합니다.
          </li>
          <li>
            임차인에 대한 권고 사항 : 주택도시보증공사(HUG)등이 운영하는
            전세보증금 반환보증 가입
          </li>
          <li>
            임대차 계약 후 「부동산거래신고법」제6조의2에 따라 30일 이내
            신고하여야 합니다(신고 시 확정일자 자동부여)
          </li>
          <li>
            최우선변제금은 근저당권 등 선순위 담보물권 설정 당시의
            소액임차인범위 및 최우선변제금액을 기준으로 합니다.
          </li>
        </ul>
        <section className="grid grid-cols-[140px_500px_140px_auto] border-y border-black">
          <div className="row-span-3 center-place h-full border-r border-black text-center">
            {"<"}서명란{">"}
            <br />
            임대차확인사항
            <br />
            확인·설명
          </div>
          <div className="row-span-3 center-place h-full border-r border-black">
            개업공인중개사가 “③임대차 확인사항”을 임대인 및 임차인에게
            설명하였음을 확인함
          </div>
          <div className="border-r border-b p-1 border-black center-place h-full">
            개업공인중개사
          </div>
          <div className="p-1 flex justify-end h-full items-center border-b border-black">
            (서명 또는 인)
          </div>
          <div className="border-r border-b p-1 border-black center-place h-full">
            임대인
          </div>
          <div className="p-1 flex justify-end h-full items-center border-b border-black">
            (서명 또는 인)
          </div>
          <div className="border-r border-black center-place h-full">
            임차인
          </div>
          <div className="p-1 flex justify-end h-full items-center">
            (서명 또는 인)
          </div>
        </section>
      </section>
    </div>
  );
};
export default ContractConfirm;
