import { useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { OpenedRegisterType } from "../../types/register";

const OpenRegisterPaginationNav = ({
  children,
  filteredData,
  pageCount,
}: {
  children: (data: OpenedRegisterType[]) => React.ReactNode;
  filteredData: OpenedRegisterType[];
  pageCount: number;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageButtons = 10; // 페이지네이션 버튼
  const lastPage = Math.ceil(filteredData.length / pageCount); // 마지막 페이지 숫자

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= Number(lastPage)) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(1, currentPage - Math.floor(pageButtons / 2));
    const endPage = Math.min(Number(lastPage), startPage + pageButtons - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`flex items-center justify-center w-5 h-5 mx-1 rounded-full shrink-0 text-xs ${
            i === currentPage ? "bg-blue-500 text-white" : ""
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const currentData = filteredData.slice(
    (currentPage - 1) * pageCount,
    currentPage * pageCount
  );

  return (
    <>
      {/** 검색한 리스트 출력 */}
      {children(currentData)}

      {/** 페이지네이션 nav */}
      <div className='flex items-center justify-center mt-6'>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-2 text-[#7f7f7f] ${
            currentPage === 1 ? "opacity-50" : ""
          }`}
        >
          <FaLongArrowAltLeft />
        </button>

        <div className='flex items-center p-1 rounded-full bg-[#f8f8f8]'>
          {renderPageNumbers()}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Number(lastPage)}
          className={`p-2 text-[#7f7f7f] ${
            currentPage === Number(lastPage) ? "opacity-50" : ""
          }`}
        >
          <FaLongArrowAltRight />
        </button>
      </div>
    </>
  );
};
export default OpenRegisterPaginationNav;
