const ConfirmThirdTable = () => {
  return (
    <section className="grid grid-cols-[140px_220px_140px_auto_220px] border-y border-black">
      <div className="row-span-6 h-full center-place border-r border-black">
        ③임대차
        <br />
        확인사항
      </div>
      {/* 확정일자 부여현황 정보 */}
      <div className="h-full center-place border-r border-b border-black">
        확정일자 부여현황 정보
      </div>
      <div className="col-span-2 flex items-center gap-2 px-2 py-1 border-r border-b border-black">
        <input type="radio" />
        <label htmlFor="">임대인 자료 제출</label>
        <input type="radio" />
        <label htmlFor="">열람 동의</label>
      </div>
      <div className="flex items-center gap-2 px-2 py-1 border-r border-b border-black">
        <input type="radio" />
        <label htmlFor="">임차인 권리 설명</label>
      </div>
      {/* 국세 및 지방세 체납정보 */}
      <div className="h-full center-place border-r border-b border-black">
        국세 및 지방세 체납정보
      </div>
      <div className="col-span-2 flex items-center gap-2 px-2 py-1 border-r border-b border-black">
        <input type="radio" />
        <label htmlFor="">임대인 자료 제출</label>
        <input type="radio" />
        <label htmlFor="">열람 동의</label>
      </div>
      <div className="flex items-center gap-2 px-2 py-1 border-r border-b border-black">
        <input type="radio" />
        <label htmlFor="">임차인 권리 설명</label>
      </div>
      {/* 전입세대 확인서 제출 */}
      <div className="h-full center-place border-r border-b border-black">
        전입세대 확인서 제출
      </div>
      <div className="col-span-3 flex items-center gap-2 px-2 py-1 border-r border-b border-black">
        <input type="radio" />
        <label htmlFor="">제출(확인서류 첨부)</label>
        <input type="radio" />
        <label htmlFor="">미제출</label>
        <input type="radio" />
        <label htmlFor="">해당없음</label>
      </div>

      {/* 최우선변제금 */}
      <div className="h-full center-place border-r border-b border-black">
        최우선변제금
      </div>
      <div className="h-full center-place border-r border-b border-black">
        소액임차인범위
      </div>
      <div className="flex items-center gap-2 px-2 py-1 border-r border-b border-black">
        <input type="text" className="contract-input w-[350px]" />
        최우선변제금액
      </div>
      <div className="flex items-center gap-2 px-2 py-1 border-r border-b border-black">
        <input type="text" className="contract-input w-full" />
      </div>
      {/* 민간임대 등록여부 */}
      <div className="h-full center-place border-r border-b border-black">
        민간임대 등록여부
      </div>
      <div className="h-full center-place border-r border-b border-black">
        등록
      </div>
      <div className="flex items-center gap-2 px-2 py-1 border-r border-b border-black">
        <input type="radio" />
        <label htmlFor="">임대인 자료 제출</label>
        <input type="radio" />
        <label htmlFor="">열람 동의</label>
      </div>
      <div className="flex items-center gap-2 px-2 py-1 border-r border-b border-black">
        <input type="radio" />
        <label htmlFor="">임차인 권리 설명</label>
      </div>
      {/* 계약갱신 요구권 행사 여부 */}
      <div className="h-full center-place border-r border-black">
        계약갱신 요구권 행사 여부
      </div>
      <div className="col-span-3 flex items-center gap-2 px-2 py-1 border-r border-black">
        <input type="radio" />
        <label htmlFor="">확인(확인서류첨부)</label>
        <input type="radio" />
        <label htmlFor="">미확인</label>
        <input type="radio" />
        <label htmlFor="">해당 없음</label>
      </div>
    </section>
  );
};
export default ConfirmThirdTable;
