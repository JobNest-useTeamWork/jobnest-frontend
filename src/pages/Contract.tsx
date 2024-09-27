import ContractSearchForm from "../components/contract/ContractSearchForm";
import ContractSearchResult from "../components/contract/ContractSearchResult";
import { useEffect, useState } from "react";
import CreateModal from "../components/contract/CreateModal";
import contractIcon from "../assets/contract.svg";
import createIcon from "../assets/writing.svg";
import { contractType } from "../types/contract";

const Contract = () => {
  const [resultList, setResultList] = useState<contractType[]>([]);
  const [filteredData, setFilteredData] = useState<contractType[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/contract-list`) //
      .then((response) => response.json())
      .then((data) => {
        setResultList(data.result);
        setFilteredData(data.result);
      });
  }, []);

  // 계약서 작성 Modal 관련
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  // 오버레이 클릭 시 모달 닫기
  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="bg-[#F7F8F9] w-full flex justify-center min-h-screen">
      <div className="bg-[#F7F8F9] max-w-[1200px] flex flex-col p-[50px]  min-h-screen">
        {/* Title */}
        <div className="flex justify-between mb-[12px]">
          <div className="flex items-center gap-[4px] font-semibold">
            <img src={contractIcon} alt="계약관리 아이콘" />
            <h1>계약관리</h1>
          </div>
          <button
            className="flex justify-center items-center gap-[4px] border border-[#335995] text-[#335995] bg-white rounded-[8px] px-4 h-[36px]"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <img src={createIcon} alt="계약서 작성 아이콘" />
            계약서 작성하기
          </button>
          {/* 계약서 작성 모달 */}
          {isOpen && (
            <div className="modal-overlay" onClick={handleOverlayClick}>
              <CreateModal closeModal={closeModal} />
            </div>
          )}
        </div>
        <section className="flex flex-col gap-[26px]">
          <ContractSearchForm
            resultList={resultList}
            setFilteredData={setFilteredData}
          />
          <ContractSearchResult filteredData={filteredData} />
        </section>
      </div>
    </div>
  );
};
export default Contract;
