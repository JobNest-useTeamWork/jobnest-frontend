import { IoDocumentText } from "react-icons/io5";
import { BiSolidHeartSquare } from "react-icons/bi";
const Navigation = () => {
  return (
    <nav className="bg-[#f8f8f8] w-[310px] h-lvh pt-[50px] px-[10px] flex justify-center align-center ">
      <div className="bg-white w-[262px] flex flex-col gap-[10px] p-[1rem]">
        <div className="flex gap-[6px]">
          <IoDocumentText />
          <div>리포트 관리</div>
        </div>
        <div className="flex gap-[6px]">
          <IoDocumentText />
          <div>리포트 열람 내역</div>
        </div>
        <div className="flex gap-[6px]">
          <BiSolidHeartSquare />
          <div>서비스 개발 희망</div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
