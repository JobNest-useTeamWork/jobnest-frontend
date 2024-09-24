import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateModal = ({ closeModal }: { closeModal: () => void }) => {
  const navigate = useNavigate();
  const [inputForm, setInputForm] = useState({
    contract_type: "다세대주택",
    transition_type: "전세",
    juso: "소재지",
  });
  return (
    <div className="modal bg-white absolute p-[40px] rounded-[10px] flex flex-col gap-[26px]">
      <h1 className="text-[24px] font-medium">계약서 작성</h1>
      <div className="grid grid-cols-[80px_150px_80px_150px] gap-6">
        <div className="font-medium">계약서 종류</div>
        <select
          className="border border-border-color text-[#6f6f6f] rounded-[6px] p-[4px] text-[14px]"
          name=""
          id=""
        >
          <option value="">선택</option>
          <option value="아파트">아파트</option>
          <option value="주상복합">주상복합</option>
        </select>
        <div className="font-medium">거래 유형</div>
        <select
          className="border border-border-color text-[#6f6f6f] rounded-[6px] p-[4px] text-[14px]"
          name=""
          id=""
        >
          <option value="">선택</option>
          <option value="매매">매매</option>
          <option value="전세">전세</option>
          <option value="월세">월세</option>
        </select>
      </div>
      <div>
        <div className="font-medium">주소 입력</div>
        <input
          className="border border-border-color rounded-[6px] p-[4px] mt-[10px] w-full"
          type="text"
          placeholder="주소를 입력해주세요"
        />
      </div>
      <div className="flex justify-center items-center gap-4 mt-[16px]">
        <button
          className="font-medium border border-border-color rounded-[6px] w-[100px] h-[36px]"
          onClick={closeModal}
        >
          취소
        </button>
        <button
          className="font-medium bg-[#335995] text-white rounded-[6px] w-[120px] h-[36px]"
          onClick={() =>
            navigate("/contract/create", {
              state: {
                contract_type: "아파트",
                transition_type: "매매",
                juso: "퀸즈파크",
              },
            })
          }
        >
          계약서 작성
        </button>
      </div>
    </div>
  );
};
export default CreateModal;
