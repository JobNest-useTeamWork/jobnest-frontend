import { useRegisterStore } from "../../store/registerStore";
import RegisterList from "./RegisterList";

const RegisterLists = () => {
  const searchedRegister = useRegisterStore((state) => state.searchedRegister);

  return (
    <ul className='w-full flex flex-col gap-[10px]'>
      {searchedRegister.map((item) => (
        <RegisterList item={item} />
      ))}
    </ul>
  );
};
export default RegisterLists;
