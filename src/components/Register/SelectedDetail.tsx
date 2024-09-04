import Button from "./Button";
import RegisterCircle from "./RegisterCircle";

const SelectedDetail = () => {
  return (
    <div className='w-[443px] bg-[#f2f2f2] shrink-0 py-10 px-5'>
      <div className='flex items-center gap-10 mb-10'>
        <p className='font-inter font-bold text-xl text-[#151515] leading-[24.2px]'>
          선택
        </p>
        <p className='font-inter font-normal text-sm leading-[16.94px]'>
          총 3개
        </p>
      </div>

      <ul className='flex flex-col gap-2'>
        <li className='flex items-center gap-6 text-sm'>
          <RegisterCircle text='등기' />
          <span className='font-noto-sans-kr text-[#6f6f6f] line-clamp-1'>
            서울특별시 서초구 강남대로34길 66-4 [양재동 8-26]
          </span>
        </li>
      </ul>

      <Button className='h-11 mt-10'>열람하기</Button>
    </div>
  );
};
export default SelectedDetail;
