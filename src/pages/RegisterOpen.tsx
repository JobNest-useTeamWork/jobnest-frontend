import { useLocation } from "react-router-dom";
import { RegisterOpenTitleData } from "../components/register/data/title";
import RegisterLayout from "../layouts/RegisterLayout";

const RegisterOpen = () => {
  const location = useLocation();
  const openedRegister = location.state;

  console.log("openedRegister", openedRegister);

  return (
    <RegisterLayout titleData={RegisterOpenTitleData}>
      <div>테이블</div>
    </RegisterLayout>
  );
};
export default RegisterOpen;
