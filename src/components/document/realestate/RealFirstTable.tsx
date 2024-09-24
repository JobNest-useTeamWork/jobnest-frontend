import { IoAlertCircleOutline } from "react-icons/io5";
const RealFirstTable = () => {
  return (
    <section className="grid grid-rows-[44px_44px_44px] grid-cols-[110px_70px_200px_100px_auto_100px_auto_100px_auto] border border-line-color">
      {/* <!-- 소재지 --> */}
      <div className="bg-[#E5E6EB] p-2 h-full border-r border-b border-[#CCC] flex items-center">
        소재지
      </div>
      <div className="grid grid-cols-[5fr_1fr_1fr] col-span-8 gap-2 px-1 h-full items-center border-b border-[#CCC]">
        <input
          type="text"
          placeholder="세종 세종시 종촌동 690 가재마을5단지세종엠코타운"
          className="contract-input bg-[#F0F0F3]"
        />
        <input type="text" placeholder="524동" className="contract-input" />
        <input type="text" placeholder="302호" className="contract-input" />
      </div>
      {/* <!-- 토지 --> */}
      <div className="flex items-center bg-[#E5E6EB] p-2 border">토지</div>
      <div className="flex items-center bg-[#F0F0F3] p-2 border-x border-b border-line-color">
        지목
      </div>
      <div className="p-1 h-[44px] flex items-center border-b border-line-color">
        <select className="w-full border border-[#CCC] rounded h-[30px] px-2">
          <option value="대">대</option>
        </select>
      </div>
      <div className="flex items-center bg-[#F0F0F3] p-2 border-x border-b border-line-color">
        <span className="mr-1">면적</span>
        <IoAlertCircleOutline />
      </div>
      <div className="p-1 h-[44px] flex items-center border-b border-line-color">
        <input
          type="text"
          placeholder=""
          className="w-full border border-[#CCC] rounded h-[30px] px-2"
        />
      </div>
      <div className="flex items-center bg-[#F0F0F3] p-2 border-x border-line-color">
        <span className="mr-1">대지권 종류</span>
        <IoAlertCircleOutline />
      </div>
      <div className="p-1 h-[44px] flex items-center border-b border-line-color">
        <select className="w-full border border-[#CCC] rounded h-[30px] px-2">
          <option value="소유권">소유권</option>
        </select>
      </div>
      <div className="flex items-center bg-[#F0F0F3] p-2 border-x border-line-color">
        <span className="mr-1">대지권 비율</span>
        <IoAlertCircleOutline />
      </div>
      <div className="p-1 h-[44px] grid grid-cols-[100px_40px_100px] items-center border-b border-line-color">
        <input type="text" className="contract-input" />
        <span className="text-center">분의</span>
        <input type="text" className="contract-input" />
      </div>
      {/* <!-- 건물 --> */}
      <div className="items-center bg-[#E5E6EB] p-2 border-t border-r border-line-color flex items-center">
        건물
      </div>
      <div className="items-center bg-[#F0F0F3] p-2 border-r border-line-color flex items-center">
        구조
      </div>
      <div className="p-1 flex items-center">
        <select className="contract-input p-1">
          <option value="직접입력">직접입력</option>
        </select>
      </div>
      <div className="items-center bg-[#F0F0F3] p-2 border-x border-line-color flex items-center">
        <span className="mr-1">용도</span>
        <IoAlertCircleOutline />
      </div>
      <div className="col-span-3 p-1 flex items-center">
        <select className="contract-input p-1">
          <option value="직접입력">직접입력</option>
        </select>
      </div>
      <div className=" flex items-center bg-[#F0F0F3] p-2 border-x border-t border-line-color">
        <span className="mr-1">면적</span>
        <IoAlertCircleOutline />
      </div>
      <div className="p-1 flex items-center">
        <input
          type="text"
          placeholder="59.9383"
          className="w-full border border-[#CCC] rounded h-[30px] px-2"
        />
      </div>
    </section>
  );
};
export default RealFirstTable;
