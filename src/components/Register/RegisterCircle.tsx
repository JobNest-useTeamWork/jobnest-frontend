const RegisterCircle = ({ text }: { text: string }) => {
  return (
    <div className='flex items-center justify-center w-[66px] h-[34px] rounded-[20px] border border-[#cccccc]'>
      {text}
    </div>
  );
};
export default RegisterCircle;
