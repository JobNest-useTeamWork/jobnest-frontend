import RegisterList from "./RegisterList";

const RegisterLists = () => {
  return (
    <ul className='w-full flex flex-col gap-[10px]'>
      <RegisterList />
      <RegisterList />
      <RegisterList />
    </ul>
  );
};
export default RegisterLists;
