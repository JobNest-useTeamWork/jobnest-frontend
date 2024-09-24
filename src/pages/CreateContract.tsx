import { twMerge } from "tailwind-merge";
import writingIcon from "../assets/writing.svg";
import RealEstateSales from "../components/document/realestate/RealEstateSales";
import { useRef, useState } from "react";
import ContractConfirm from "../components/document/confirm/ContractConfirm";
import Receipt from "../components/document/receipt/Receipt";
import { useLocation, useNavigate } from "react-router-dom";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const CreateContract = () => {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("contract");
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selected = (e.target as HTMLButtonElement).name;
    setSelectedButton(selected);
    if (selected === "contract") navigate("/contract/create");
    // else navigate(`/contract/create/${selected}`);
  };

  // PDF 출력
  const printRef = useRef<HTMLDivElement | null>(null);
  const handleDownloadPdf = async () => {
    const element = printRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2, // 해상도를 높이기 위해 스케일링 (옵션)
    });
    const data = canvas.toDataURL("image/png");
    const pdf = new jsPDF("portrait", "px", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const imgProperties = pdf.getImageProperties(data);
    const imageRatio = imgProperties.width / imgProperties.height;
    const pdfImageHeight = pdfWidth / imageRatio;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfImageHeight);
    pdf.save("document.pdf");
  };

  // 인쇄 핸들러
  const handlePrint = () => {
    const printContents = printRef.current;
    if (printContents) {
      const originalContents = document.body.innerHTML;

      // 인쇄할 요소만 렌더링하기 위해 전체 body 내용을 임시로 변경
      document.body.innerHTML = printContents.innerHTML;
      window.print(); // 브라우저의 인쇄 대화상자 띄우기

      // 인쇄 후 원래 페이지로 복구
      document.body.innerHTML = originalContents;
      window.location.reload(); // 페이지 새로고침을 통해 상태 복구
    }
  };

  return (
    <div className="bg-[#F7F8F9] w-full flex justify-center]">
      <div className="p-[24px] flex flex-col gap-[24px] w-[1400px]">
        <div className="flex items-center gap-[8px] text-[20px] font-semibold px-[24px]">
          <img src={writingIcon} alt="계약서 작성 아이콘" />
          <h1>계약서 작성</h1>
        </div>
        <div className="flex items-center gap-[10px] px-[24px]">
          <button
            className={twMerge(
              "rounded-[30px] border border-[#335995] bg-[#335995] text-[#335995] bg-opacity-30 px-[10px] py-[4px]"
            )}
            name="contract"
            onClick={onClickHandler}
          >
            계약서
          </button>
          <button
            className={twMerge(
              "rounded-[30px] border border-[#CCCCCC] text-[#8894A0] bg-opacity-30 px-[10px] py-[4px]"
            )}
            name="confirm"
            onClick={onClickHandler}
          >
            중개대상물 확인서
          </button>
          <button
            className={twMerge(
              "rounded-[30px] border border-[#CCCCCC] text-[#8894A0] bg-opacity-30 px-[10px] py-[4px]"
            )}
            name="receipt"
            onClick={onClickHandler}
          >
            영수증
          </button>
        </div>
        <section
          ref={printRef}
          className="print-container w-[1300px] h-[1800px] mx-auto bg-white p-[50px] w-[1200px] flex flex-col gap-[40px] text-[14px] rounded-[10px] border border-[#CCCCCC] border-opacity-80"
        >
          {/* 머리말 */}
          <div className="print-hidden flex justify-between items-center border-b border-[#CCCCCC] pb-[14px]">
            <div>
              {selectedButton === "contract" &&
                `${data?.juso} |
          계약서 종류 : ${data?.contract_type} | 거래유형 : ${data?.transition_type}`}
            </div>
            <div className="flex gap-2">
              <button
                onClick={handlePrint}
                className="border border-[#D9D9D9] rounded-[6px] w-[100px] h-[40px] text-[#335995] text-[14px]"
              >
                출력
              </button>
              <button
                onClick={handleDownloadPdf}
                className="border border-[#D9D9D9] rounded-[6px] w-[100px] h-[40px] text-[#335995] text-[14px]"
              >
                다운로드
              </button>
              <button className="blue-button w-[100px] h-[40px] text-[14px]">
                저장
              </button>
            </div>
          </div>
          {selectedButton === "contract" && <RealEstateSales />}
          {selectedButton === "confirm" && <ContractConfirm />}
          {selectedButton === "receipt" && <Receipt />}
        </section>
      </div>
    </div>
  );
};
export default CreateContract;
