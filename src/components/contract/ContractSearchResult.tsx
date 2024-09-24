import { useEffect, useRef, useState } from "react";
import { IoWarningOutline } from "react-icons/io5";
import ResultItem from "./ResultItem";
import { contractType } from "../../types/contract";

const ContractSearchResult = () => {
  const [resultList, setResultList] = useState<contractType[]>([]);
  useEffect(() => {
    // fetch(`${import.meta.env.VITE_BASE_URL}/contract-list`) //
    fetch("/search.json") //
      .then((response) => response.json())
      .then((data) => setResultList(data.result));
  }, []);

  // 개인정보 활용 동의서
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const handlePrint = () => {
    if (iframeRef.current) {
      iframeRef.current.focus();
      iframeRef.current.contentWindow?.print(); // iframe 내부에서 print 실행
    }
  };

  return (
    <>
      <section className="bg-white p-[30px] rounded-[10px]">
        <div className="flex justify-between mb-[40px] items-center">
          <div className="flex gap-[16px] items-center">
            <h2 className="font-semibold text-[20px]">검색 결과</h2>
            <div className="text-[#335995]">{resultList.length}</div>
          </div>
          {resultList.length !== 0 && (
            <div className="flex gap-[14px]">
              <button
                className="output-button px-[10px] py-[4px]"
                onClick={handlePrint}
              >
                개인정보 수집 및 이용 동의서 출력
              </button>
              <button className="common-button px-[10px] py-[4px]">
                엑셀다운로드
              </button>
              <select className="common-button px-[10px] py-[4px]">
                <option value="10">10개씩 보기</option>
              </select>
            </div>
          )}
          <iframe
            ref={iframeRef}
            src="/private_document.pdf"
            className="hidden"
            title="print-pdf"
          />
        </div>
        <section className="text-[14px] text-center overflow-auto relative">
          <div className="contract-search-grid font-semibold bg-[#D9D9D9] rounded-[10px] px-[2px] py-[10px] min-w-max">
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

          {resultList.length === 0 ? (
            <div className="flex flex-col justify-center items-center gap-[30px] p-[100px]">
              <IoWarningOutline className="text-[70px] text-[#808080]" />
              리스트가 없습니다.
            </div>
          ) : (
            resultList.map((contract) => (
              <ResultItem key={contract.id} {...contract} />
            ))
          )}
        </section>
      </section>
    </>
  );
};
export default ContractSearchResult;
