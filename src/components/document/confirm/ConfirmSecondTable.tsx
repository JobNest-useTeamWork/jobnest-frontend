import { IoAlertCircleOutline } from "react-icons/io5";
const ConfirmSecondTable = () => {
  return (
    <section className="grid grid-cols-[140px_210px_140px_1fr_140px_1fr] grid-rows-[40px_170px_170px] border-y border-black">
      <div className="row-span-3 border-r border-black center-place flex-col gap-2">
        <div>권리관계</div>
        <button className="blue-button p-2 print-hidden">
          PDF 열람 및 연동
        </button>
      </div>
      <div className="row-span-3 border-r border-black center-place flex-col">
        <div>등기부 기재사항</div>
        <div className="text-[#335995]">공부연동 가능 항목</div>
      </div>
      <div className="col-span-2 border-r border-b border-black center-place">
        소재지
      </div>
      <div className="col-span-2 border-b border-black center-place">
        소유권 외의 권리사항
      </div>
      <div className="border-r border-b border-black center-place flex gap-1">
        <div>토지</div>
        <IoAlertCircleOutline />
      </div>
      <div className="p-1 border-b border-r border-black center-place">
        <textarea
          name=""
          id=""
          className="contract-input h-full resize-none focus:outline-[#747474]"
        ></textarea>
      </div>
      <div className="border-r border-b border-black center-place flex gap-1">
        <div>토지</div>
        <IoAlertCircleOutline />
      </div>
      <div className="p-1 border-b border-black">
        <textarea
          name=""
          id=""
          className="contract-input h-full resize-none focus:outline-[#747474]"
        ></textarea>
      </div>
      <div className="border-r border-black center-place flex gap-1">
        <div>건축물</div>
        <IoAlertCircleOutline />
      </div>
      <div className="p-1 border-r border-black">
        <textarea
          name=""
          id=""
          className="contract-input h-full resize-none focus:outline-[#747474]"
        ></textarea>
      </div>
      <div className="border-r border-black center-place flex gap-1">
        <div>건축물</div>
        <IoAlertCircleOutline />
      </div>
      <div className="p-1">
        <textarea
          name=""
          id=""
          className="contract-input h-full resize-none focus:outline-[#747474]"
        ></textarea>
      </div>
    </section>
  );
};
export default ConfirmSecondTable;
