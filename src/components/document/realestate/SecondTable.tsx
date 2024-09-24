const SecondTable = () => {
  return (
    <section className="grid grid-rows-[repeat(4,_1fr)_2fr_1fr]">
      {/* 매매대금 */}
      <div className="grid grid-cols-[115px_auto] border border-line-color">
        <div className="border-r border-line-color bg-[#E5E6EB] p-2 flex items-center">
          매매대금
        </div>
        <div className="grid grid-cols-[16px_480px_50px_auto] gap-[6px] items-center p-2 border-r border-line-color">
          <span>金</span>
          <input
            type="text"
            className="border border-line-color rounded-[4px] h-[32px]"
          />
          <span>원정 </span>
          <input
            type="text"
            className="border border-line-color rounded-[4px] h-[32px] bg-[#f8f8f9]"
          />
        </div>
      </div>
      {/* 계약금 */}
      <div className="grid grid-cols-[115px_3fr_114px_1fr] border border-line-color">
        <div className="border-r border-line-color bg-[#E5E6EB] p-2 flex items-center">
          계약금
        </div>
        <div className="grid grid-cols-[16px_480px_200px] gap-[6px] items-center p-2 border-r border-line-color">
          <span>金</span>
          <input
            type="text"
            className="border border-line-color rounded-[4px] h-[32px]"
          />
          <span>원정 은 계약 시에 지급하고 영수함. </span>
        </div>
        <div className="border-r border-line-color bg-[#E5E6EB] p-2 flex items-center">
          영수자
        </div>
        <div className="grid grid-cols-[auto_20px] items-center p-2 gap-[6px]">
          <input
            type="text"
            className="border border-line-color rounded-[4px] h-[32px]"
          />
          <span>(인)</span>
        </div>
      </div>
      {/* 융자금 */}
      <div className="grid grid-cols-[115px_auto] border border-line-color">
        <div className="border-r border-line-color bg-[#E5E6EB] p-2 flex items-center">
          융자금
        </div>
        <div className="grid grid-cols-[16px_480px_50px_auto] gap-[6px] items-center p-2 border-r border-line-color">
          <span>金</span>
          <input
            type="text"
            className="border border-line-color rounded-[4px] h-[32px]"
          />
          <span>원정 은</span>
          <select className="border border-line-color rounded-[4px] h-[32px]">
            <option value="">현 상태에서 매수인이 승계함</option>
          </select>
        </div>
      </div>
      {/* 현 임대 보증금 */}
      <div className="grid grid-cols-[115px_auto] border border-line-color">
        <div className="border-r border-line-color bg-[#E5E6EB] p-2 flex items-center">
          현 임대 보증금
        </div>
        <div className="grid grid-cols-[16px_480px_50px_auto] gap-[6px] items-center p-2 border-r border-line-color">
          <span>金</span>
          <input
            type="text"
            className="border border-line-color rounded-[4px] h-[32px]"
          />
          <span>원정 은</span>
          <input
            type="text"
            className="border border-line-color rounded-[4px] h-[32px]"
            placeholder="매도인이 잔금 지급일까지 말소한다."
          />
        </div>
      </div>
      {/* 중도금 */}
      <div className="grid grid-cols-[115px_auto] border border-line-color rows-span-2">
        <div className="border-r border-line-color bg-[#E5E6EB] p-2 flex items-center">
          중도금
        </div>
        <div>
          <div className="grid grid-cols-[16px_480px_50px_180px_auto] gap-[6px] gap-[6px] items-center p-2 border-b border-r border-line-color">
            <span>金</span>
            <input
              type="text"
              className="border border-line-color rounded-[4px] h-[32px]"
            />
            <span>원정 은</span>
            <input
              type="date"
              className="border border-line-color rounded-[4px] h-[32px]"
            />
            <span>에 지급하며,</span>
          </div>

          <div className="grid grid-cols-[16px_480px_50px_180px_auto] gap-[6px] gap-[6px] items-center p-2 border-r border-line-color">
            <span>金</span>
            <input
              type="text"
              className="border border-line-color rounded-[4px] h-[32px]"
            />
            <span>원정 은</span>
            <input
              type="date"
              className="border border-line-color rounded-[4px] h-[32px]"
            />
            <span>에 지급한다.</span>
          </div>
        </div>
      </div>
      {/* 잔금 */}
      <div className="grid grid-cols-[115px_auto] border border-line-color">
        <div className="border-r border-line-color bg-[#E5E6EB] p-2 flex items-center">
          잔금
        </div>
        <div className="grid grid-cols-[16px_480px_50px_180px_auto] gap-[6px] items-center p-2 border-r border-line-color">
          <span>金</span>
          <input
            type="text"
            className="border border-line-color rounded-[4px] h-[32px]"
          />
          <span>원정 은</span>
          <input
            type="date"
            className="border border-line-color rounded-[4px] h-[32px]"
          />
          <span>에 지급한다.</span>
        </div>
      </div>
    </section>
  );
};
export default SecondTable;
