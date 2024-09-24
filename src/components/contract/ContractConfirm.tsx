import ConfirmFirstPage from "../document/confirm/ConfirmFirstPage";
import ConfirmSecondPage from "../document/confirm/ConfirmSecondPage";
import ConfirmThirdPage from "../document/confirm/ConfirmThirdPage";
import ConfirmFourthPage from "./ConfirmFourthPage";

const ContractConfirm = ({ page }: { page: string }) => {
  return (
    <>
      {page === "1" && <ConfirmFirstPage />}
      {page === "2" && <ConfirmSecondPage />}
      {page === "3" && <ConfirmThirdPage />}
      {page === "4" && <ConfirmFourthPage />}
    </>
  );
};
export default ContractConfirm;
