import Button from "./Button";
import RegisterListContent from "./RegisterListContent";

const SelectedDetail = () => {
  return (
    <div className='flex flex-col w-[443px] bg-[#f2f2f2] shrink-0 py-10 px-5'>
      <div className='flex items-center gap-10 mb-10'>
        <p className='font-inter font-bold text-xl text-[#151515] leading-[24.2px]'>
          선택
        </p>
        <p className='font-inter font-normal text-sm leading-[16.94px]'>
          총 3개
        </p>
      </div>

      <ul className='flex flex-col gap-2 mb-10'>
        <RegisterListContent />
        <RegisterListContent />
        <RegisterListContent />
      </ul>

      <Button className='h-11 mt-auto'>열람하기</Button>
    </div>
  );
};
export default SelectedDetail;
