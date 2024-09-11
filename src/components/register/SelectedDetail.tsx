import { Link } from "react-router-dom";
import Button from "./Button";
import { useRegisterStore } from "../../store/registerStore";
import RegisterListContent from "./RegisterListContent";

const SelectedDetail = () => {
  const searchedRegister = useRegisterStore((state) => state.searchedRegister);

  return (
    <div className='flex flex-col w-[443px] bg-[#f2f2f2] shrink-0 py-10 px-5 animate-slideInFromRightToLeft'>
      <div className='flex items-center gap-10 mb-10'>
        <p className='font-inter font-bold text-xl text-[#151515] leading-[24.2px]'>
          선택
        </p>
        <p className='flex items-center font-inter font-normal text-sm leading-[16.94px] text-[#151515]'>
          <span className='pr-1'>총</span>
          <span>
            {
              searchedRegister.result.filter((item) => item.isChecked === true)
                .length
            }
          </span>
          <span>개</span>
        </p>
      </div>

      <ul className='flex flex-col gap-2 mb-10'>
        {searchedRegister.result
          .filter((item) => item.isChecked === true)
          .map((item) => (
            <RegisterListContent
              register_type={item.register_type}
              address={item.address}
            />
          ))}
      </ul>

      <Link to='/register/open'>
        <Button className='h-11'>열람하기</Button>
      </Link>
    </div>
  );
};
export default SelectedDetail;
