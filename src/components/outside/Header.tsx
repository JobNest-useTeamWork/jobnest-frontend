import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-[70px]">
      <div>
        <img className="h-[30px]" src={logo} alt="JonNest-Logo" />
      </div>
      <div className="flex justify-between items-center gap-[2rem]">
        <div className="flex justify-between items-center gap-[1.5rem]">
          <Link to="/">매물 관리</Link>
          <Link to="/contract">계약 관리</Link>
          <Link to="/register">등기/대장 발급</Link>
        </div>
        <div className="text-[#8894A0]">010-0000-0000</div>
        <button className="w-[130px] h-[42px] bg-[#347fff] text-white">
          로그아웃
        </button>
        <div></div>
      </div>
    </header>
  );
};
export default Header;
