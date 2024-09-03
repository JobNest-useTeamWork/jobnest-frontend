import Button from "../components/Register/Button";
import Checkbox from "../components/Register/Checkbox";
import RegisterLists from "../components/Register/RegisterLists";
import SearchForm from "../components/Register/SearchForm";
import Title from "../components/Register/Title";

const Register = () => {
  return (
    <>
      <Title />
      <Button className='w-[130px] h-[42px]'>열람내역</Button>
      <SearchForm />
      <div className='flex items-center relative gap-[6px]'>
        <Checkbox type='checkbox'>전체선택</Checkbox>
      </div>
      <RegisterLists />
    </>
  );
};
export default Register;
