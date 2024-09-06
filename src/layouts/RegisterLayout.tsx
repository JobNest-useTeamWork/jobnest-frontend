import { twMerge } from "tailwind-merge";
import Button from "../components/register/Button";
import SearchForm from "../components/register/SearchForm";
import Title from "../components/register/Title";
import { RegisterTitleType } from "../types/register";
import { Link } from "react-router-dom";

interface RegisterLayoutType {
  children: React.ReactNode;
  isOpenDetail?: boolean;
  titleData: RegisterTitleType;
}

const RegisterLayout = ({
  children,
  isOpenDetail,
  titleData,
}: RegisterLayoutType) => {
  const { title, desc } = titleData;

  return (
    <div className='flex flex-col w-full h-full relative'>
      <Title title={title} desc={desc} />
      {!isOpenDetail && (
        <Link to='/register/open'>
          <Button
            className={twMerge(
              "w-[130px] h-[42px] absolute top-1 right-10",
              title === "등기/대장 열람내역" && "hidden"
            )}
          >
            열람내역
          </Button>
        </Link>
      )}
      {title === "등기/대장 열람내역" && (
        <Link to='/register'>
          <Button className='w-[130px] h-[42px] absolute top-1 right-10'>
            뒤로가기
          </Button>
        </Link>
      )}
      <SearchForm />
      {children}
    </div>
  );
};
export default RegisterLayout;
