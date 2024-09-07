import Checkbox from "../components/register/Checkbox";
import RegisterLists from "../components/register/RegisterLists";
import SelectedDetail from "../components/register/SelectedDetail";
import RegisterLayout from "../layouts/RegisterLayout";
import { useRegisterStore } from "../store/registerStore";

const Register = () => {
  const isOpenDetail = true;
  const searchedRegister = useRegisterStore((state) => state.searchedRegister);

  return (
    <div className={isOpenDetail ? "flex justify-between gap-10" : ""}>
      <RegisterLayout isOpenDetail={isOpenDetail}>
        {searchedRegister.length !== 0 && (
          <div>
            <div className="flex items-center relative gap-[6px] mt-[100px] mb-[60px]">
              <Checkbox type="checkbox">전체선택</Checkbox>
            </div>
            <RegisterLists />
          </div>
        )}
      </RegisterLayout>

      {isOpenDetail && <SelectedDetail />}
    </div>
  );
};
export default Register;
