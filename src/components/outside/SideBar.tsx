import { IoDocumentText } from "react-icons/io5";
import { BiSolidHeartSquare } from "react-icons/bi";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { BsFillPinFill } from "react-icons/bs";

const SideBar = () => {
  const [isFixed, setIsFixed] = useState(true);
  return (
    <>
      <nav
        className={twMerge(
          "bg-[#f8f8f8] h-[100vh] sticky top-0 left-0 p-4 flex flex-col gap-[16px] items-center z-[900]",
          isFixed
            ? "w-[310px] block flex flex-col gap-[16px] "
            : "w-[50px] hover:w-[310px] group transition-all duration-300 ease-in-out "
        )}
      >
        <div className="flex self-start gap-[16px] items-center">
          {/* 펼치기 전 아이콘 */}
          <button
            className={twMerge(
              "flex h-[20px] w-[20px] items-center",
              isFixed ? "hidden" : "group-hover:hidden"
            )}
          >
            <MdArrowBackIosNew />
          </button>
          {/* 펼친 후 아이콘 */}
          <button
            className={twMerge(
              "flex h-[20px] w-[20px] items-center",
              !isFixed && "hidden group-hover:block"
            )}
          >
            <MdArrowForwardIos />
          </button>
          <button
            onClick={() => setIsFixed((isFixed) => !isFixed)}
            className={twMerge(
              "flex h-[20px] w-[20px] items-center",
              isFixed ? "text-main-color" : "hidden group-hover:block"
            )}
          >
            <BsFillPinFill />
          </button>
        </div>
        <div
          className={twMerge(
            "bg-white w-[262px] h-[80vh] flex flex-col gap-[10px] p-[1rem] shadow-lg",
            isFixed
              ? ""
              : "transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"
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
      {/* <div
        className={twMerge(isFixed ? "w-[310px] mr-[50px]" : "w-[50px]")}
      ></div> */}
    </>
  );
};

export default SideBar;
