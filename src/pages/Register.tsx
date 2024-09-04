import Checkbox from "../components/Register/Checkbox";
import RegisterLists from "../components/Register/RegisterLists";
import SelectedDetail from "../components/Register/SelectedDetail";
import RegisterLayout from "../layouts/RegisterLayout";
import { useRegisterStore } from "../store/registerStore";

const Register = () => {
  const isOpenDetail = true;
  const searchedRegister = useRegisterStore((state) => state.searchedRegister);

  return (
    <div className={isOpenDetail ? "flex justify-between gap-10" : ""}>
      <RegisterLayout isOpenDetail={isOpenDetail}>
        {searchedRegister.length !== 0 && (
          <>
            <div className='flex items-center relative gap-[6px]'>
              <Checkbox type='checkbox'>전체선택</Checkbox>
            </div>
            <RegisterLists />
          </>
        )}
      </RegisterLayout>

      {isOpenDetail && <SelectedDetail />}
    </div>
  );
};
export default Register;
