const Receipt = () => {
  return (
    <div className="h-full">
      {/* Title */}
      <h1 className="text-[40px] text-center font-medium border border-[#CCCCCC] rounded-[6px] mb-[40px]">
        영수증
      </h1>
      <section className="flex flex-col gap-[46px]">
        {/* 번호 */}
        <section className="w-[270px] grid grid-cols-[90px_180px] grid-rows-[40px] border border-[#CCCCCC]">
          <div className="border-r border-[#CCCCCC] bg-[#E5E6EB] flex items-center p-2 font-medium">
            NO.
          </div>
          <div className="flex items-center p-2">
            <input
              type="text"
              className="border border-[#CCCCCC] bg-[#F8F8F9] rounded-[4px] h-[30px] w-full"
            />
          </div>
        </section>
        {/* 성명과 금액 */}
        <section className="grid grid-cols-[116px_auto] grid-rows-[40px_40px] border border-[#CCCCCC] items-center">
          <div className="border-r border-b border-[#CCCCCC] bg-[#E5E6EB] flex items-center h-full p-2 font-medium">
            성명
          </div>
          <div className="border-b border-[#CCCCCC] h-full flex items-center p-2">
            <input
              type="text"
              className="border border-[#CCCCCC] rounded-[4px] h-[30px] w-full"
            />
          </div>
          <div className="border-r border-[#CCCCCC] bg-[#E5E6EB] flex items-center h-full p-2 font-medium">
            금액
          </div>
          <div className="grid grid-cols-[20px_450px_60px_auto_60px] items-center p-2 text-center gap-[4px]">
            <span>₩</span>
            <input
              type="number"
              className="border border-[#CCCCCC] rounded-[4px] h-[30px] w-full"
            />
            <span>一金</span>
            <input
              type="text"
              className="border border-[#CCCCCC] bg-[#F8F8F9] rounded-[4px] h-[30px] w-full"
            />
            <span>) 원정</span>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-[116px_auto] grid-rows-[40px] border border-[#CCCCCC]">
            <div className="border-r border-[#CCCCCC] bg-[#E5E6EB] flex items-center p-2 font-medium">
              부동산의 표시
            </div>
            <div className="flex items-center p-2">
              <input
                type="text"
                className="border border-[#CCCCCC] bg-[#F8F8F9] rounded-[4px] h-[30px] w-full"
              />
            </div>
          </div>
          <div className="flex gap-[4px] font-medium p-2 items-center">
            <p>상기 금액을 위 표시 부동산(아파트) 매매 계약서에 대한</p>
            <select
              name=""
              id=""
              className="w-[600px] border border-[#CCC] rounded-[4px] h-[30px]"
            >
              <option value="">계약금</option>
            </select>
            <p>으로 정히 영수하고 이에 본 영수증을 발행합니다.</p>
          </div>
        </section>
        {/* 발행인 정보 */}
        <section className="grid grid-cols-[116px_90px_auto] grid-rows-[40px_40px] border border-[#CCCCCC]">
          <div className="row-span-2 border-r border-[#CCCCCC] bg-[#E5E6EB] flex items-center p-2 font-medium">
            발행인
          </div>
          <div className="border-r border-b border-[#CCCCCC] bg-[#E5E6EB] flex items-center p-2 font-medium">
            주소
          </div>
          <div className="flex items-center p-2 border-b border-[#CCCCCC]">
            <input
              type="text"
              className="border border-[#CCCCCC] rounded-[4px] h-[30px] w-full"
            />
          </div>
          <div className="border-r border-[#CCCCCC] bg-[#E5E6EB] flex items-center p-2 font-medium">
            성명
          </div>
          <div className="flex items-center p-2">
            <input
              type="text"
              className="border border-[#CCCCCC] brounded-[4px] h-[30px] w-full rounded-[4px]"
            />
          </div>
        </section>
        {/* 발행일 */}
        <section className="flex w-[316px] border border-[#CCCCCC] self-center">
          <div className="w-[116px] border-r border-b border-[#CCCCCC] bg-[#E5E6EB] flex items-center p-2 font-medium">
            발행일
          </div>
          <div className="w-[200px] flex items-center p-2">
            <input
              type="date"
              className="border border-[#CCCCCC] rounded-[4px] h-[30px] w-full"
            />
          </div>
        </section>
      </section>
    </div>
  );
};
export default Receipt;
