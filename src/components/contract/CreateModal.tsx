import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type TCreateModalForm = {
  contract_type: string;
  transaction_type: string;
  juso: string;
};

const contractCategory = [
  "아파트",
  "오피스텔",
  "단독주택",
  "다세대주택",
  "다가구주택",
  "주상복합",
  "도시형생활주택",
  "상가",
  "사무실",
  "연립",
  "아파트분양권",
];

const CreateModal = ({ closeModal }: { closeModal: () => void }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateModalForm>({
    defaultValues: {
      contract_type: "",
      transaction_type: "",
      juso: "",
    },
  });

  const onSubmit = (data: TCreateModalForm) => {
    navigate("/create/contract", {
      state: data,
    });
  };
  return (
    <form
      className="modal bg-white absolute p-[40px] rounded-[10px] flex flex-col gap-[26px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-[24px] font-medium">계약서 작성</h1>
      <div className="grid grid-cols-[80px_150px_80px_150px] gap-6">
        <div className="font-medium">계약서 종류</div>
        <select
          className="border border-border-color text-[#6f6f6f] rounded-[6px] p-[4px] text-[14px]"
          {...register("contract_type", {
            required: "계약서 종류를 선택해주세요.",
          })}
        >
          <option value="">선택</option>
          {contractCategory.map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </select>

        <div className="font-medium">거래 유형</div>
        <select
          className="border border-border-color text-[#6f6f6f] rounded-[6px] p-[4px] text-[14px]"
          {...register("transaction_type", {
            required: "거래 유형을 선택해주세요.",
          })}
        >
          <option value="">선택</option>
          <option value="매매">매매</option>
          <option value="전세">전세</option>
          <option value="월세">월세</option>
        </select>
      </div>
      <div className="flex gap-[120px]">
        {errors.contract_type && (
          <span className="text-red-500 text-sm col-span-2">
            {errors.contract_type.message}
          </span>
        )}
        {errors.transaction_type && (
          <span className="text-red-500 text-sm col-span-2">
            {errors.transaction_type.message}
          </span>
        )}
      </div>
      <div>
        <div className="font-medium">주소 입력</div>
        <input
          className="border border-border-color rounded-[6px] p-[4px] mt-[10px] w-full"
          type="text"
          placeholder="주소를 입력해주세요"
          {...register("juso", { required: "주소를 입력해주세요." })}
        />
        {errors.juso && (
          <span className="text-red-500 text-sm">{errors.juso.message}</span>
        )}
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
          type="submit"
        >
          계약서 작성
        </button>
      </div>
    </form>
  );
};
export default CreateModal;
