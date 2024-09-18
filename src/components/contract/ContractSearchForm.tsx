import { twMerge } from "tailwind-merge";
import { GrPowerReset } from "react-icons/gr";
import { LiaSearchSolid } from "react-icons/lia";
import { useEffect, useId, useState } from "react";

/*
{
    "id": 1,
    "contract_date": "2024-06-15",  # 계약일
    "balance_date": "2024-07-05",  # 잔금일
    "end_date": "2024-08-05",  # 만기일
    "contract_type": "다세대주택",  # 계약서유형
    "transaction_type": "전세",  # 거래유형
    "juso": "서울특별시 강남구 테헤란로 152 [역삼동 702]",  # 소재지
    "deposit": 150000000,  # 매매(보증)금
    "seller": "박준혁",  # 매도/임대인
    "buyer": "최유리",  # 매수/임차인
    "partner_realtor": None,  # 공동 중개업소
    "contract_num": "B000111224",  # 계약서 번호
    "created_at": "2024-06-15 14:52:30"  # 저장시간
},
*/

const ContractSearchForm = () => {
  const [currentDate, setCurrentDate] = useState("");

  const contractCategory = [
    "아파트",
    "주상복합",
    "오피스텔",
    "도시형생활주택",
    "상가",
    "사무실",
    "연립",
    "다세대",
    "아파트분양권",
  ];

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().slice(0, 10); // YYYY-MM-DD 형식으로 변환
    setCurrentDate(formattedDate);
  }, []); // 컴포넌트가 처음 렌더링될 때 한 번 실행

  const id = useId();

  return (
    <section className="p-[30px] w-full h-[460px] bg-white rounded-[10px]">
      <h2 className="text-[20px] font-semibold mb-[16px]">계약서 검색</h2>
      <form className={twMerge("text-[14px]")}>
        {/* 첫번째 행 */}
        <div
          className={twMerge(
            "grid grid-cols-[100px_300px_1fr] gap-[10px] items-center h-[90px] border-t-2 border-black px-[4px] overflow-x-auto"
          )}
        >
          <div className="font-semibold">날짜조회</div>
          <div className="flex items-center gap-[10px]">
            <input
              type="date"
              className="p-[10px] border border-[#CCCCCC] rounded-[6px] w-[136px]"
              value={currentDate}
              onChange={(e) => setCurrentDate(e.target.value)}
            />
            <span>~</span>
            <input
              type="date"
              className="p-[10px] border border-[#CCCCCC] rounded-[6px] w-[136px]"
              value={currentDate}
              onChange={(e) => setCurrentDate(e.target.value)}
            />
          </div>
          <div className="flex gap-[16px] min-w-[300px]">
            <div className="flex gap-[6px] items-center">
              <input type="radio" name="date" />
              <label htmlFor="date">1개월</label>
            </div>
            <div className="flex gap-[6px] items-center">
              <input type="radio" name="date" />
              <label htmlFor="date">3개월</label>
            </div>
            <div className="flex gap-[6px] items-center">
              <input type="radio" name="date" />
              <label htmlFor="date">6개월</label>
            </div>
            <div className="flex gap-[6px] items-center">
              <input type="radio" name="date" />
              <label htmlFor="date">1년</label>
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
          <select
            name=""
            id=""
            className="p-[10px] border border-[#CCCCCC] rounded-[6px] text-[#6f6f6f] text-[14px]"
          >
            <option value="">선택</option>
            {contractCategory.map((type, index) => (
              <option value={type} key={`${id}-${index}`}>
                {type}
              </option>
            ))}
          </select>
          <div className="grid grid-cols-[100px_80px_80px_80px] gap-[20px] font-semibold">
            <div className="min-w-[80px] ml-[20px]">계약서 상태</div>
            <div className="flex gap-[8px] items-center">
              <input type="checkbox" />
              <label htmlFor="">전체</label>
            </div>
            <div className="flex gap-[8px] items-center">
              <input type="checkbox" />
              <label htmlFor="">계약중</label>
            </div>
            <div className="flex gap-[8px] items-center">
              <input type="checkbox" />
              <label htmlFor="">계약완료</label>
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
            name=""
            id=""
            className="p-[10px] border border-[#CCCCCC] rounded-[6px] text-[#6f6f6f] text-[14px]"
          >
            <option value="">선택</option>
            <option value="">매매</option>
            <option value="">전세</option>
            <option value="">월세</option>
            <option value="">연세</option>
          </select>
          <div className="grid grid-cols-[100px_80px_80px] gap-[20px] font-semibold">
            <div className="ml-[20px]">중계유형</div>
            <div className="flex gap-[8px] items-center">
              <input type="checkbox" />
              <label htmlFor="">공동중개</label>
            </div>
            <div className="flex gap-[8px] items-center">
              <input type="checkbox" />
              <label htmlFor="">단독중개</label>
            </div>
          </div>
        </div>
        <div className="center-place gap-[8px] mt-[22px]">
          <button
            type="reset"
            className="common-button gap-[16px] w-[96px] h-[36px]"
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
