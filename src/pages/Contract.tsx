import ContractSearchForm from "../components/contract/ContractSearchForm";
import { IoNewspaperOutline } from "react-icons/io5";
import { HiPencilSquare } from "react-icons/hi2";
import ContractSearchResult from "../components/contract/ContractSearchResult";

const Contract = () => {
  return (
    <div className="bg-[#F7F8F9] w-full flex flex-col p-[50px]">
      {/* Title */}
      <div className="flex justify-between w-full mx-auto">
        <div className="flex items-center">
          <IoNewspaperOutline />
          <h1>계약관리</h1>
        </div>
        <button className="flex items-center">
          <HiPencilSquare />
          계약서 작성하기
        </button>
      </div>
      <ContractSearchForm />
      <ContractSearchResult />
    </div>
  );
};
export default Contract;
