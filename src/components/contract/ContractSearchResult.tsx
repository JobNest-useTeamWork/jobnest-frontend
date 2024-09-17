const ContractSearchResult = () => {
  return (
    <>
      <section className="bg-white p-[16px]">
        <div className="flex justify-between">
          <div className="flex gap-[16px]">
            <h2>검색 결과</h2>
            <div>0</div>
          </div>
          <div className="flex">
            <button className="output-button px-[10px] py-[4px]">
              개인정보 수집 및 이용 동의서 출력
            </button>
            <button className="common-button px-[10px] py-[4px]">
              엑셀다운로드
            </button>
            <select className="common-button px-[10px] py-[4px]">
              <option value="10">10개씩 보기</option>
            </select>
          </div>
        </div>
        <form action="">
          <div>
            <input type="checkbox" />
            <div>계약일</div>
            <div>잔금일</div>
            <div>만기일</div>
            <div>계약서 유형</div>
            <div>거래 유형</div>
            <div>소재지</div>
            <div>매매(보증)금</div>
            <div>매도/임대인</div>
            <div>매수/임차인</div>
            <div>공동 중개업소</div>
            <div>계약 관리</div>
            <div>계약서번호</div>
          </div>
        </form>
      </section>
    </>
  );
};
export default ContractSearchResult;
