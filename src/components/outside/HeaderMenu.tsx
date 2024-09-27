import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HeaderMenu = ({
  isOpen,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  const outRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // 해당 이벤트가 영역 밖이라면
      if (outRef.current && !outRef.current.contains(event.target as Node)) {
        // isOpen && toggleMenu(!isOpen);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isOpen]);

  return (
    <>
      <div
        ref={outRef}
        className={`bg-white z-[1000] absolute flex flex-col gap-[8px] md:hidden center-place top-[70px] left-[-50px] bg-white shadow-md p-[24px] transition-all duration-300 ease-in-out lg:hidden ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
        }`}
      >
        <address className="text-[#8894A0] sm:hidden not-italic border-b border-[#EDEDED] mb-[4px]">
          010-0000-0000
        </address>
        {/* <Link
          to="/"
          className="active:text-main-color hover:text-main-color active:font-bold hover:font-bold"
        >
          매물관리
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
    </>
  );
};
export default HeaderMenu;
