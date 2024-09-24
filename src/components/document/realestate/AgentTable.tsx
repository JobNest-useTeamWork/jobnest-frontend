const AgentTable = () => {
  return (
    <section className="grid grid-cols-[190px_190px_190px_100px_auto_120px_200px] grid-rows-[44px_44px_44px] border border-line-color">
      <div className="row-span-3 bg-[#E5E6EB] center-place text-center">
        개업
        <br />
        공인중개사
      </div>
      {/* 첫 번째 행 */}
      <div className="bg-[#E5E6EB] bg-opacity-50 p-2 h-full border-x border-b border-line-color flex items-center">
        사무소 소재지
      </div>
      <div className="col-span-5 p-1 border-b border-line-color flex items-center">
        <input type="text" className="contract-input" />
      </div>
      {/* 두 번째 행 */}
      <div className="bg-[#E5E6EB] bg-opacity-50 p-2 h-full border-x border-b border-line-color flex items-center">
        사무소 명칭
      </div>
      <div className="col-span-3 p-1 flex items-center border-b border-line-color">
        <input type="text" className="contract-input" />
      </div>
      <div className="bg-[#E5E6EB] bg-opacity-50 p-2 h-full border-x border-b border-line-color flex items-center">
        대표자명
      </div>
      <div className="flex gap-[4px] items-center p-1 border-b border-line-color">
        <input type="text" className="contract-input" />
        (인)
      </div>
      {/* 세 번째 행 */}
      <div className="bg-[#E5E6EB] bg-opacity-50 p-2 h-full border-x border-line-color flex items-center">
        전화번호
      </div>
      <div className="p-1 flex items-center">
        <input type="text" className="contract-input" />
      </div>
      <div className="bg-[#E5E6EB] bg-opacity-50 p-2 h-full border-x border-b border-line-color flex items-center">
        등록 번호
      </div>
      <div className="p-1 flex items-center">
        <input type="text" className="contract-input" />
      </div>
      <div className="bg-[#E5E6EB] bg-opacity-50 p-2 h-full border-x border-b border-line-color flex items-center">
        소속 공인중개사
      </div>
      <div className="flex gap-[4px] items-center p-1">
        <input type="text" className="contract-input" />
        (인)
      </div>
    </section>
  );
};
export default AgentTable;
