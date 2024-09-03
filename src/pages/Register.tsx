import Button from "../components/Register/Button";
import SearchForm from "../components/Register/SearchForm";
import Title from "../components/Register/Title";

const Register = () => {
  return (
    <>
      <Title />
      <Button className='w-[130px] h-[42px]'>열람내역</Button>
      <SearchForm />
    </>
  );
};
export default Register;
