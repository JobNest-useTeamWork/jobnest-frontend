import Button from "../components/Register/Button";
import SearchForm from "../components/Register/SearchForm";
import Title from "../components/Register/Title";

interface RegisterLayoutType {
  children: React.ReactNode;
  isOpenDetail: boolean;
}

const RegisterLayout = ({ children, isOpenDetail }: RegisterLayoutType) => {
  return (
    <div className='flex flex-col w-full h-full'>
      <Title />
      {!isOpenDetail && (
        <Button className='w-[130px] h-[42px]'>열람내역</Button>
      )}
      <SearchForm />
      {children}
    </div>
  );
};
export default RegisterLayout;
