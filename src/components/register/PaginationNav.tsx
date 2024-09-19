import { useEffect, useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { searchRegister } from "../../api/register";
import { useRegisterStore } from "../../store/registerStore";
import { RegisterAPIType } from "../../types/register";

const PaginationNav = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageButtons = 10;

  const searchData = useRegisterStore((state) => state.searchData);
  const addSearchRegister = useRegisterStore(
    (state) => state.addSearchRegister
  );

  const {
    data: registers,
    isLoading,
    error,
  } = useQuery<RegisterAPIType>({
    queryKey: ["registers", currentPage, searchData],
    queryFn: () => searchRegister(searchData.address, currentPage),
    staleTime: 1000,
  });

  // 검색 결과를 zustand store에 저장
  useEffect(() => {
    if (registers && registers.result) {
      addSearchRegister(registers, searchData.register_type);
    }
  }, [registers, addSearchRegister]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= Number(registers?.last_page)) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(1, currentPage - Math.floor(pageButtons / 2));
    const endPage = Math.min(
      Number(registers?.last_page),
      startPage + pageButtons - 1
    );

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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;

  return (
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
        disabled={currentPage === Number(registers?.last_page)}
        className={`p-2 text-[#7f7f7f] ${
          currentPage === Number(registers?.last_page) ? "opacity-50" : ""
        }`}
      >
        <FaLongArrowAltRight />
      </button>
    </div>
  );
};
export default PaginationNav;
