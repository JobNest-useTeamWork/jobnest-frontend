import { twMerge } from "tailwind-merge";
import { Link, useNavigate } from "react-router-dom";
import { RegisterTitleType } from "../../types/register";
import Title from "./Title";
import Button from "./Button";
import SearchForm from "./SearchForm";
import { useRegisterStore } from "../../store/registerStore";
import OpenRegisterSearchForm from "./OpenRegisterSearchForm";

interface RegisterLayoutType {
  children: React.ReactNode;
  isOpenDetail?: boolean;
  titleData: RegisterTitleType;
}

const RegisterWrapper = ({
  children,
  isOpenDetail,
  titleData,
}: RegisterLayoutType) => {
  const { title, desc } = titleData;
  const resetSearchRegister = useRegisterStore(
    (state) => state.resetSearchRegister
  );
  const navigate = useNavigate();

  const moveRegisterPage = () => {
    resetSearchRegister();
    navigate("/register");
  };

  return (
    <div className='flex flex-col w-full h-full relative'>
      <Title title={title} desc={desc} />
      {!isOpenDetail && (
        <Link to='/register/open'>
          <Button
            className={twMerge(
              "w-[130px] h-[42px] absolute -top-10 right-10",
              title === "등기/대장 열람내역" && "hidden"
            )}
          >
            열람내역
          </Button>
        </Link>
      )}
      {title === "등기/대장 열람내역" && (
        <Button
          className='w-[130px] h-[42px] absolute -top-10 right-10'
          onClick={moveRegisterPage}
        >
          뒤로가기
        </Button>
      )}
      {title === "등기/대장 열람" && <SearchForm />}
      {title === "등기/대장 열람내역" && <OpenRegisterSearchForm />}

      {children}
    </div>
  );
};

export default RegisterWrapper;
