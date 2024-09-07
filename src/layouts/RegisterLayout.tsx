import Button from "../components/register/Button";
import SearchForm from "../components/register/SearchForm";
import Title from "../components/register/Title";

interface RegisterLayoutType {
  children: React.ReactNode;
  isOpenDetail: boolean;
}

const RegisterLayout = ({ children, isOpenDetail }: RegisterLayoutType) => {
  return (
    <div className="flex flex-col w-full h-full relative">
      <Title />
      {!isOpenDetail && (
        <Button className="w-[130px] h-[42px] absolute top-1 right-10">
          열람내역
        </Button>
      )}
      <SearchForm />
      {children}
    </div>
  );
};

export default RegisterLayout;
