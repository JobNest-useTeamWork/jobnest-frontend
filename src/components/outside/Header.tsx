import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5"; // 닫기 아이콘도 추가
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center h-[100px] p-[2.5rem] border-b border-[#EDEDED] max-sm:p-[1rem]">
      <Link to="/">
        <img
          className="h-[30px] max-sm:h-[24px]"
          src={logo}
          alt="JonNest-Logo"
        />
      </Link>
      <div className="relative flex justify-between items-center gap-[2rem] text-[18px] max-lg:text-[16px] max-lg:gap-[20px] transition-all duration-300 ease-in-out max-sm:gap-[1.2rem]">
        {/* 큰 화면에서 보여질 헤더 메뉴 */}
        <div
          className={`flex justify-between items-center gap-[1.5rem] max-md:hidden`}
        >
          {/* <Link
            to="/"
            className="active:text-main-color hover:text-main-color active:font-bold hover:font-bold"
          >
            매물 관리
          </Link> */}
          <Link
            to="/create/search"
            className="active:text-main-color hover:text-main-color active:font-bold hover:font-bold"
          >
            계약 관리
          </Link>
          <Link
            to="/register"
            className="active:text-main-color hover:text-main-color active:font-bold hover:font-bold"
          >
            등기/대장 발급
          </Link>
        </div>
        {/* 반응형 - 햄버거 아이콘 */}
        <div className="md:hidden transition-all duration-300 ease-in-out center-place">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>
        </div>

        {/* 햄버거 메뉴 클릭 시 표시될 메뉴 */}
        <HeaderMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        {/* 핸드폰 번호 */}
        <address className="text-[#8894A0] max-sm:hidden not-italic">
          010-0000-0000
        </address>
        {/* 로그인/로그아웃 버튼 */}
        <button className="w-[130px] h-[42px] bg-main-color text-white max-lg:w-[112px] transition-all duration-300 ease-in-out max-sm:w-[100px]">
          로그아웃
        </button>
      </div>
    </header>
  );
};

export default Header;
