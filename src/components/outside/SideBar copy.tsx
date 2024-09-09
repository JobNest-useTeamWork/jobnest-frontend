import { IoDocumentText } from "react-icons/io5";
import { BiSolidHeartSquare } from "react-icons/bi";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { BsFillPinFill } from "react-icons/bs";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <nav
      className={twMerge(
        "bg-[#f8f8f8] w-[50px] hover:w-[310px] h-[100vh] p-4 fixed flex flex-col gap-[16px] items-center group transition-all duration-300 ease-in-out z-[1000] hover:fixed left-0"
      )}
    >
      <button
        className={twMerge("flex h-[20px] group-hover:hidden self-start")}
      >
        <MdArrowBackIosNew />
      </button>
      <div className={twMerge("flex justify-between hidden group-hover:block")}>
        <button className={twMerge("flex h-[20px]")}>
          <MdArrowForwardIos />
        </button>
        <button>
          <BsFillPinFill />
        </button>
      </div>
      <div
        className={twMerge(
          "bg-white w-[262px] h-[80vh] flex flex-col gap-[10px] p-[1rem] transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200 ease-in-out shadow-lg"
        )}
      >
        <div className="flex gap-[6px] items-center active:text-main-color">
          <IoDocumentText />
          <a href="#">리포트 관리</a>
        </div>
        <div className="flex gap-[6px] items-center active:text-main-color">
          <IoDocumentText />
          <a href="#">리포트 열람 내역</a>
        </div>
        <div className="flex gap-[6px] items-center active:text-main-color">
          <BiSolidHeartSquare />
          <a href="#">서비스 개발 희망</a>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
