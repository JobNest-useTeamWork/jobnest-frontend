import { useEffect, useState } from "react";
import Checkbox from "../components/register/Checkbox";
import RegisterLists from "../components/register/RegisterLists";
import SelectedDetail from "../components/register/SelectedDetail";
import { useRegisterStore } from "../store/registerStore";
import RegisterWrapper from "../components/register/RegisterWrapper";

const RegisterTitleData = {
  title: "등기/대장 열람",
  desc: "동시에 여러 개의 등기 또는 대장을 발급받을 수 있어요.",
};

const Register = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  const searchedRegister = useRegisterStore((state) => state.searchedRegister);
  const toggleCheckboxAll = useRegisterStore(
    (state) => state.toggleCheckboxAll
  );

  useEffect(() => {
    const findCheckedItem = searchedRegister.result.some(
      (item) => item.isChecked
    );
    const findUnCheckedItem = searchedRegister.result.every(
      (item) => item.isChecked
    );

    setOpenDetail(findCheckedItem);
    setIsCheckedAll(findUnCheckedItem);
  }, [searchedRegister]);

  const handleCheckboxAll = () => {
    setIsCheckedAll((prev) => !prev);
    toggleCheckboxAll(isCheckedAll);
  };

  console.log("searched Register", searchedRegister);

  return (
    <div className={openDetail ? "flex justify-between gap-10" : ""}>
      <RegisterWrapper isOpenDetail={openDetail} titleData={RegisterTitleData}>
        {searchedRegister.result.length !== 1 && (
          <div className='ml-10 max-w-[1264px]'>
            <div className='flex items-center relative gap-[6px] mb-[60px]'>
              <Checkbox
                type='checkbox'
                onChange={handleCheckboxAll}
                checked={isCheckedAll}
              >
                전체선택
              </Checkbox>
            </div>

            <RegisterLists />
          </div>
        )}
      </RegisterWrapper>

      {openDetail && <SelectedDetail />}
    </div>
  );
};
export default Register;
