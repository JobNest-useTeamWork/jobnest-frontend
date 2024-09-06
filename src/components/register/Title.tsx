import { RegisterTitleType } from "../../types/register";

type TitleType = RegisterTitleType;

const Title = ({ title, desc }: TitleType) => {
  return (
    <div className='flex items-end gap-8 mb-[100px]'>
      <h1 className='font-suit text-[40px] text-[#151515] font-extrabold leading-[49.92px] tracking-[-0.01em] shrink-0'>
        {title}
      </h1>
      <p className='font-inter text-xl text-[#151515] font-bold leading-[24.2px] relative top-[-3px] line-clamp-1'>
        {desc}
      </p>
    </div>
  );
};
export default Title;
