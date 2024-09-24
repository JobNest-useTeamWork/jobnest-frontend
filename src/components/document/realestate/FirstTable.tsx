const FirstTable = () => {
  return (
    <section className="grid grid-rows-[1fr_1fr_1fr] grid-cols-[110px_70px_200px_90px_auto_90px_auto_90px_auto] items-center border border-line-color">
      {/* <!-- 소재지 --> */}
      <div className="bg-[#E5E6EB] p-2 h-full border-b border-[#CCC]">
        소재지
      </div>
      <div className="grid grid-cols-[5fr_1fr_1fr] col-span-8 gap-2 px-1 h-full items-center border-b border-[#CCC]">
        <input
          type="text"
          placeholder="세종 세종시 종촌동 690 가재마을5단지세종엠코타운"
          className="w-full border border-[#CCC] p-2 rounded h-[30px] bg-[#F0F0F3]"
        />
        <input
          type="text"
          placeholder="524동"
          className="w-full border border-[#CCC] p-2 rounded h-[30px] bg-[#F0F0F3]"
        />
        <input
          type="text"
          placeholder="302호"
          className="w-full border border-[#CCC] p-2 rounded h-[30px] bg-[#F0F0F3]"
        />
      </div>
      {/* <!-- 토지 --> */}
      <div className="items-center bg-[#E5E6EB] p-2 border">토지</div>
      <div className="items-center bg-[#F0F0F3] p-2 border border-line-color">
        지목
      </div>
      <div className="p-1">
        <select className="w-full border border-[#CCC] rounded h-[30px] px-2">
          <option value="대">대</option>
        </select>
      </div>
      <div className="items-center bg-[#F0F0F3] p-2 border border-line-color">
        면적
      </div>
      <div className="p-1">
        <input
          type="text"
          placeholder=""
          className="w-full border border-[#CCC] rounded h-[30px] px-2"
        />
      </div>
      <div className="flex items-center bg-[#F0F0F3] p-2 border border-line-color">
        대지권 종류
      </div>
      <div className="p-1">
        <select className="w-full border border-[#CCC] rounded h-[30px] px-2">
          <option value="소유권">소유권</option>
        </select>
      </div>
      <div className="flex items-center bg-[#F0F0F3] p-2 border border-line-color">
        대지권 비율
      </div>
      <div className="grid grid-cols-[3fr_1fr_3fr] gap-2 items-center p-1">
        <input
          type="text"
          className="w-full border border-[#CCC] rounded h-[30px] px-2"
        />
        <span className="text-center">분의</span>
        <input
          type="text"
          className="w-full border border-[#CCC] rounded h-[30px] px-2"
        />
      </div>
      {/* <!-- 건물 --> */}
      <div className="items-center bg-[#E5E6EB] p-2 border border-line-color">
        건물
      </div>
      <div className=" flex items-center bg-[#F0F0F3] p-2 border border-line-color">
        구조
      </div>
      <div className="p-1">
        <select className="w-full border border-[#CCC] rounded h-[30px] px-2">
          <option value="직접입력">직접입력</option>
        </select>
      </div>
      <div className="flex items-center bg-[#F0F0F3] p-2 border border-line-color">
        용도
      </div>
      <div className="col-span-3 p-1">
        <select className="w-full border border-[#CCC] rounded h-[30px] px-2">
          <option value="직접입력">직접입력</option>
        </select>
      </div>
      <div className=" flex items-center bg-[#F0F0F3] p-2 border border-line-color">
        면적
      </div>
      <div className="p-1">
        <input
          type="text"
          placeholder="59.9383"
          className="w-full border border-[#CCC] rounded h-[30px] px-2"
        />
      </div>
    </section>
  );
};
export default FirstTable;
