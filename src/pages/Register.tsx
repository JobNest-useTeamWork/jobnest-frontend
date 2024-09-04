import Checkbox from "../components/Register/Checkbox";
import RegisterLists from "../components/Register/RegisterLists";
import RegisterLayout from "../layouts/RegisterLayout";
import { useRegisterStore } from "../store/registerStore";

const Register = () => {
  const searchedRegister = useRegisterStore((state) => state.searchedRegister);

  console.log(searchedRegister);

  return (
    <>
      <RegisterLayout>
        {searchedRegister.length !== 0 && (
          <>
            <div className='flex items-center relative gap-[6px]'>
              <Checkbox type='checkbox'>전체선택</Checkbox>
            </div>
            <RegisterLists />
          </>
        )}
      </RegisterLayout>
    </>
  );
};
export default Register;
