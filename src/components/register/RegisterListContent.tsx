import { RegisterType } from "../../types/register";

type RegisterListContentType = Omit<RegisterType, "id">;

const RegisterListContent = ({ type, address }: RegisterListContentType) => {
  return (
    <div className='flex items-center gap-4 text-sm'>
      <div className='flex items-center justify-center px-3 min-w-[66px] h-[34px] rounded-[20px] border border-[#cccccc] shrink-0'>
        <span>{type}</span>
      </div>
      <span className='font-noto-sans-kr text-[#6f6f6f] line-clamp-1'>
        {address}
      </span>
    </div>
  );
};
export default RegisterListContent;
