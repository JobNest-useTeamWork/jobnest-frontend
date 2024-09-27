import { twMerge } from "tailwind-merge";
import { GrPowerReset } from "react-icons/gr";
import { LiaSearchSolid } from "react-icons/lia";
// import { Controller, useForm } from "react-hook-form";
import { useForm } from "react-hook-form";
import { TSearchFormType } from "../../types/contractsearch";
import { contractSearchFormStore } from "../../store/contractSearchFormStore";
import { contractType } from "../../types/contract";
import { useId } from "react";
// import CustomDropdown from "./CustomDropdown";

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

const ContractSearchForm = ({
  resultList,
  setFilteredData,
}: {
  resultList: contractType[];
  setFilteredData: React.Dispatch<React.SetStateAction<contractType[]>>;
}) => {
  const useid = useId();
  const { searchForm, setSearchForm, resetSearchForm } =
    contractSearchFormStore();
  const {
    register,
    handleSubmit,
    reset,
    // control,
    formState: { errors },
  } = useForm<TSearchFormType>({
    defaultValues: searchForm,
  });

  const onSubmit = (data: TSearchFormType) => {
    setSearchForm(data);
    filterResults(data);
    resetSearchForm();
  };

  const filterResults = (searchForm: TSearchFormType) => {
    const filtered = resultList.filter((contract: contractType) => {
      // 날짜 필터
      const matchesDateRange =
        (!searchForm.startDate ||
          new Date(contract.contract_date) >= new Date(searchForm.startDate)) &&
        (!searchForm.endDate ||
          new Date(contract.contract_date) <= new Date(searchForm.endDate));
      // 계약서 종류 필터
      const matchesContractType =
        !searchForm.contractType ||
        contract.contract_type === searchForm.contractType;
      // 거래 유형 종류 필터
      const matchesTransactionType =
        !searchForm.transactionType ||
        contract.transaction_type === searchForm.transactionType;

      return matchesDateRange && matchesContractType && matchesTransactionType;
    });

    setFilteredData([...filtered]);
  };

  return (
    <section className="p-[30px] h-[460px] bg-white rounded-[10px] max-w-full">
      <h2 className="text-[20px] font-semibold mb-[16px]">계약서 검색</h2>
      <form
        className={twMerge("text-[14px]")}
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* 첫번째 행 */}
        <div
          className={twMerge(
            "grid grid-cols-[100px_300px_1fr] gap-[10px] items-center h-[90px] border-t-2 border-black px-[4px] overflow-x-auto"
          )}
        >
          <div className="font-semibold">날짜조회</div>
          <div className="flex items-center gap-[10px]">
            {/* 시작날짜 */}
            <input
              type="date"
              className="p-[10px] border border-[#CCCCCC] rounded-[6px] w-[136px]"
              {...register("startDate")}
            />
            <span>~</span>
            {/* 종료날짜 */}
            <input
              type="date"
              className="p-[10px] border border-[#CCCCCC] rounded-[6px] w-[136px]"
              {...register("endDate", {
                validate: (endDate, formValues) =>
                  !formValues.startDate ||
                  new Date(formValues.startDate) <= new Date(endDate) ||
                  "날짜를 확인해주세요.",
              })}
            />
          </div>

          <div className="flex gap-[16px] min-w-[300px]">
            <div className="flex gap-[6px] items-center">
              <input
                type="radio"
                name="date"
                id="1month"
                className="accent-[#335995] w-[14px] h-[14px]"
              />
              <label htmlFor="1month">1개월</label>
            </div>
            <div className="flex gap-[6px] items-center">
              <input
                type="radio"
                name="date"
                id="3month"
                className="accent-[#335995] w-[14px] h-[14px]"
              />
              <label htmlFor="3month">3개월</label>
            </div>
            <div className="flex gap-[6px] items-center">
              <input
                type="radio"
                name="date"
                id="6month"
                className="accent-[#335995] w-[14px] h-[14px]"
              />
              <label htmlFor="6month">6개월</label>
            </div>
            <div className="flex gap-[6px] items-center">
              <input
                type="radio"
                name="date"
                id="1year"
                className="accent-[#335995] w-[14px] h-[14px]"
              />
              <label htmlFor="1year">1년</label>
            </div>
            {/* 오류 메시지 출력 */}
            <div className="col-span-3 text-red-500">
              {errors.startDate && <span>{errors.startDate.message}</span>}
              {errors.endDate && <span>{errors.endDate.message}</span>}
            </div>
          </div>
        </div>
        {/* 두 번째 행 */}
        <div
          className={twMerge(
            "grid grid-cols-[100px_200px_1fr] gap-[10px] items-center h-[90px] border-t border-black border-opacity-30 px-[4px] overflow-x-auto"
          )}
        >
          <div className="font-semibold">계약서 종류</div>
          {/* Select */}
          <select
            id="contract-type"
            className="p-[10px] border border-[#CCCCCC] rounded-[6px] text-[#6f6f6f] text-[14px]"
            {...register("contractType")}
          >
            <option value="">선택</option>
            {contractCategory.map((type, index) => (
              <option value={type} key={`${useid}-${index}`}>
                {type}
              </option>
            ))}
          </select>
          {/* <div className="relative">
            <Controller
              name="contractType"
              control={control}
              defaultValue="" // 기본값 설정
              render={({ field }) => (
                <CustomDropdown
                  options={contractCategory}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  placeholder="계약서 종류 선택"
                />
              )}
            />
          </div> */}
          <div className="grid grid-cols-[100px_80px_80px_80px] gap-[20px] font-semibold">
            <div className="min-w-[80px] ml-[20px]">계약서 상태</div>
            <div className="flex gap-[8px] items-center">
              <input
                type="checkbox"
                id="status-during"
                className="accent-[#335995] w-[14px] h-[14px]"
                {...register("contractStatus")}
              />
              <label htmlFor="status-during">계약중</label>
            </div>
            <div className="flex gap-[8px] items-center">
              <input
                type="checkbox"
                id="status-finish"
                className="accent-[#335995] w-[14px] h-[14px]"
                {...register("contractStatus")}
              />
              <label htmlFor="status-finish">계약완료</label>
            </div>
          </div>
        </div>
        {/* 세 번째 행 */}
        <div
          className={twMerge(
            "grid grid-cols-[100px_200px_1fr] gap-[10px] items-center h-[90px] border-y border-black border-opacity-30 px-[4px] overflow-x-auto"
          )}
        >
          <div className="font-semibold">거래유형</div>
          <select
            id="transaction-type"
            className="p-[10px] border border-[#CCCCCC] rounded-[6px] text-[#6f6f6f] text-[14px]"
            {...register("transactionType")}
          >
            <option value="">선택</option>
            <option value="매매">매매</option>
            <option value="전세">전세</option>
            <option value="월세">월세</option>
            <option value="연세">연세</option>
          </select>
          <div className="grid grid-cols-[100px_80px_80px] gap-[20px] font-semibold">
            <div className="ml-[20px]">중계유형</div>
            <div className="flex gap-[8px] items-center">
              <input
                type="checkbox"
                value="공동중개"
                id="common"
                className="accent-[#335995] w-[14px] h-[14px]"
                {...register("brokerageType")}
              />
              <label htmlFor="common">공동중개</label>
            </div>
            <div className="flex gap-[8px] items-center">
              <input
                type="checkbox"
                value="단독중개"
                id="only"
                className="accent-[#335995] w-[14px] h-[14px]"
                {...register("brokerageType")}
              />
              <label htmlFor="only">단독중개</label>
            </div>
          </div>
        </div>
        <div className="center-place gap-[8px] mt-[22px]">
          <button
            type="reset"
            className="common-button gap-[16px] w-[96px] h-[36px]"
            onClick={() => reset()}
          >
            <GrPowerReset />
            초기화
          </button>
          <button
            type="submit"
            className="output-button gap-[16px] w-[96px] h-[36px]"
          >
            <LiaSearchSolid />
            검색
          </button>
        </div>
      </form>
    </section>
  );
};
export default ContractSearchForm;
