import { twMerge } from "tailwind-merge";
import { GrPowerReset } from "react-icons/gr";
import { LiaSearchSolid } from "react-icons/lia";

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
  return (
    <section className="p-[16px] w-[650px] h-[460px bg-white mx-auto">
      <h2>계약서 검색</h2>
      <form className={twMerge("grid")}>
        {/* 첫번째 행 */}
        <div>
          <div>날짜조회</div>
          <select name="" id=""></select>
          <div className="flex">
            <input type="date" />
            <span>~</span>
            <input type="date" />
          </div>
          <div>
            <input type="radio" name="date" />
            <label htmlFor="date">1개월</label>
            <input type="radio" name="date" />
            <label htmlFor="date">3개월</label>
            <input type="radio" name="date" />
            <label htmlFor="date">6개월</label>
            <input type="radio" name="date" />
            <label htmlFor="date">1년</label>
          </div>
        </div>
        {/* 두 번째 행 */}
        <div>
          <div>계약서 종류</div>
          <select name="" id=""></select>
          <div>
            <div>계약서 상태</div>
            <input type="checkbox" />
            <label htmlFor="">전체</label>
            <input type="checkbox" />
            <label htmlFor="">계약중</label>
            <input type="checkbox" />
            <label htmlFor="">계약완료</label>
          </div>
        </div>
        {/* 세 번째 행 */}
        <div>
          <div>거래유형</div>
          <select name="" id=""></select>
          <div>
            <div>중계유형</div>
            <input type="checkbox" />
            <label htmlFor="">공동중개</label>
            <input type="checkbox" />
            <label htmlFor="">단독중개</label>
          </div>
        </div>
        <div className="center-place gap-[8px]">
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
