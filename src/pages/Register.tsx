import { useEffect, useState } from "react";
import Checkbox from "../components/register/Checkbox";
import RegisterLists from "../components/register/RegisterLists";
import SelectedDetail from "../components/register/SelectedDetail";
import RegisterLayout from "../layouts/RegisterLayout";
import { useRegisterStore } from "../store/registerStore";
import { RegisterTitleData } from "../components/register/data/title";

const Register = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  const searchedRegister = useRegisterStore((state) => state.searchedRegister);
  const toggleCheckboxAll = useRegisterStore(
    (state) => state.toggleCheckboxAll
  );

  useEffect(() => {
    const findCheckedItem = searchedRegister.some((item) => item.isChecked);
    const findUnCheckedItem = searchedRegister.every((item) => item.isChecked);

    setOpenDetail(findCheckedItem);
    setIsCheckedAll(findUnCheckedItem);
  }, [searchedRegister]);

  const handleCheckboxAll = () => {
    setIsCheckedAll((prev) => !prev);
    toggleCheckboxAll(isCheckedAll);
  };

  return (
    <div className={openDetail ? "flex justify-between gap-10" : ""}>
      <RegisterLayout isOpenDetail={openDetail} titleData={RegisterTitleData}>
        {searchedRegister.length !== 0 && (
          <div>
            <div className="flex items-center relative gap-[6px] mb-[60px]">
              <Checkbox
                type="checkbox"
                onChange={handleCheckboxAll}
                checked={isCheckedAll}
              >
                전체선택
              </Checkbox>
            </div>
            <RegisterLists />
          </div>
        )}
      </RegisterLayout>

      {openDetail && <SelectedDetail />}
    </div>
  );
};
export default Register;
