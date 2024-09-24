const LastSign = () => {
  return (
    <section>
      <button className="contract-input center-place w-[140px] px-2 mb-2 ml-auto print-hidden">
        +매도인 정보 추가
      </button>
      <div className="grid grid-rows-[44px_44px] grid-cols-[190px_190px_180px_90px_140px_90px_140px_auto] border border-line-color items-center">
        {/* 첫 번째 행 */}
        <div className="row-span-2 border-r border-line-color p-2 bg-[#E5E6EB] h-full">
          <div className="center-place m-[10px]">매도인</div>
          <button className="center-place bg-[#747474] text-white w-full h-[30px] mt-[4px]">
            고객검색
          </button>
        </div>
        <div className="bg-[#E5E6EB] bg-opacity-50 p-2 h-full border-r border-b border-line-color items-center flex">
          주소
        </div>
        <div className="col-span-5 p-1 border-b border-line-color h-[44px] items-center flex">
          <input
            type="text"
            className="contract-input focus:outline-[#747474]"
          />
        </div>
        {/* 마지막 열 */}
        <div className="row-span-2 center-place border-l border-line-color p-2 h-full">
          (인)
        </div>
        {/* 두 번째 행 */}
        <div className="bg-[#E5E6EB] bg-opacity-50 h-full flex items-center p-1 border-r border-line-color">
          <select name="" id="" className="contract-input p-1">
            <option value="">주민등록번호</option>
          </select>
        </div>
        <div className="flex items-center p-1">
          <input
            type="text"
            className="contract-input focus:outline-[#747474]"
          />
        </div>
        <div className="bg-[#E5E6EB] bg-opacity-50 p-2 h-full border-x border-line-color flex items-center">
          전화
        </div>
        <div className="flex items-center p-1">
          <input
            type="text"
            className="contract-input focus:outline-[#747474]"
          />
        </div>
        <div className="bg-[#E5E6EB] bg-opacity-50 p-2 h-full border-x border-line-color flex items-center">
          성명
        </div>
        <div className="flex items-center p-1">
          <input
            type="text"
            className="contract-input focus:outline-[#747474]"
          />
        </div>
      </div>
    </section>
  );
};
export default LastSign;
