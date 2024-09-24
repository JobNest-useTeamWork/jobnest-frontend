const ConfirmSecondTable = () => {
  return (
    <section className="grid grid-cols-[180px_auto] border border-[#CCCCCC]">
      <div className="col-span-2 bg-[#E5E6EB] center-place p-2">유의사항</div>
      <div className="border-b border-r border-[#CCCCCC] flex-col center-place p-2">
        <span>개업공인중개사의</span>
        <span>확인·설명 의무</span>
      </div>
      <div className="border-b border-[#CCCCCC] flex items-center p-2">
        개업공인중개사는 중개대상물에 관한 권리를 취득하려는 중개의뢰인에게
        성실·정확하게 설명하고,
        <br />
        토지대장 등본, 등기사항증명서 등 설명의 근거자료를 제시해야 합니다.
      </div>
      <div className="border-r border-[#CCCCCC] flex-col center-place p-2">
        <span>실제 거래가격</span>
        <span>신고</span>
      </div>
      <div className="flex items-center p-2">
        「부동산 거래신고 등에 관한 법률」 제3조 및 같은 법 시행령 별표 1
        제1호마목에 따른 실제 거래가격은 매수인이 매수한 부동산을 양도하는 경우
        「소득세법」 제97조제1항과 같은 법 시행 령 제163조제11항제2호에 따라
        취득 당시의 실제 거래가액으로 보아 양도차익이 계산될 수 있음을
        유의하시기 바랍니다.
      </div>
    </section>
  );
};
export default ConfirmSecondTable;
