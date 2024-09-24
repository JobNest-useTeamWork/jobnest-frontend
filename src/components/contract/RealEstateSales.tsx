import { useLocation } from "react-router-dom";

const RealEstateSales = () => {
  const location = useLocation();
  const data = location.state;
  /*
  "contract_type": "다세대주택",  # 계약서유형
            "transaction_type": "전세",  # 거래유형
            "juso": "서울특별시 강남구 테헤란로 152 [역삼동 702]",  # 소재지
            */
  return (
    <div className="flex flex-col gap-[40px]">
      <div className="flex justify-between items-center border-b border-[#CCCCCC] pb-[14px]">
        <div className="text-[14px] font-semibold ">
          {`${data?.juso} |
          계약서 종류 : ${data?.contract_type} | 거래유형 : ${data?.transition_type}`}
        </div>
        <div>
          <button className="border border-[#D9D9D9] rounded-[6px] w-[100px] h-[40px] text-[#335995] text-[14px]">
            출력
          </button>
          <button className="blue-button w-[100px] h-[40px] text-[14px] ml-[8px]">
            저장
          </button>
        </div>
      </div>

      <h1 className="text-[40px] text-center border border-[#CCCCCC] rounded-[6px]">
        부동산({`${data?.contract_type}`}) {`${data?.transition_type}`} 계약서
      </h1>
      <section className="flex flex-col gap-[10px]">
        <p className="font-medium">
          매도인과 매수인 쌍방은 아래 표시 부동산에 관하여 다음과 같이 매매
          계약을 체결한다
        </p>
        <div className="flex items-center gap-[8px]">
          <p>1. 부동산의 표시</p>
          <button className="blue-button px-[20px] py-[8px]">
            PDF 열람 및 연동
          </button>
        </div>
        <p className="text-black text-opacity-50">
          공부연동이 가능한 항목입니다. 마우스로 클릭 시 기준 공부명을 확인할 수
          있습니다.
        </p>
        {/* 표 */}
        <div className="grid grid-cols-12 border border-gray-300 bg-white">
          {/* <!-- 소재지 --> */}
          <div className="col-span-1 flex items-center bg-gray-100 p-2 border border-gray-300">
            소재지
          </div>
          <div className="col-span-7">
            <input
              type="text"
              placeholder="세종 세종시 종촌동 690 가재마을5단지세종엠코타운"
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="col-span-2">
            <input
              type="text"
              placeholder="524동"
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="col-span-2">
            <input
              type="text"
              placeholder="302호"
              className="w-full border p-2 rounded"
            />
          </div>

          {/* <!-- 토지 --> */}
          <div className="col-span-1 flex items-center bg-gray-100 p-2 border border-gray-300">
            토지
          </div>
          <div className="col-span-1 flex items-center bg-gray-100 p-2 border border-gray-300">
            지목
          </div>
          <div className="col-span-2">
            <select className="w-full border p-2 rounded">
              <option value="대">대</option>
              {/* <!-- 기타 선택 항목 --> */}
            </select>
          </div>
          <div className="col-span-1 flex items-center bg-gray-100 p-2 border border-gray-300">
            면적
          </div>
          <div className="col-span-2">
            <input
              type="text"
              placeholder=""
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="col-span-2 flex items-center bg-gray-100 p-2 border border-gray-300">
            대지권 종류
          </div>
          <div className="col-span-3">
            <select className="w-full border p-2 rounded">
              <option value="소유권">소유권</option>
              {/* <!-- 기타 선택 항목 --> */}
            </select>
          </div>

          {/* <!-- 건물 --> */}
          <div className="col-span-1 flex items-center bg-gray-100 p-2 border border-gray-300">
            건물
          </div>
          <div className="col-span-1 flex items-center bg-gray-100 p-2 border border-gray-300">
            구조
          </div>
          <div className="col-span-2">
            <select className="w-full border p-2 rounded">
              <option value="직접입력">직접입력</option>
              {/* <!-- 기타 선택 항목 --> */}
            </select>
          </div>
          <div className="col-span-1 flex items-center bg-gray-100 p-2 border border-gray-300">
            용도
          </div>
          <div className="col-span-2">
            <select className="w-full border p-2 rounded">
              <option value="직접입력">직접입력</option>
              {/* <!-- 기타 선택 항목 --> */}
            </select>
          </div>
          <div className="col-span-2 flex items-center bg-gray-100 p-2 border border-gray-300">
            면적
          </div>
          <div className="col-span-3">
            <input
              type="text"
              placeholder="59.9383"
              className="w-full border p-2 rounded"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-[10px]">
        <p>2. 계약내용</p>
        <p>
          제1조[목적] 위 부동산의 매매에 대하여 매도인과 매수인은 합의에 의하여
          매매 대금을 아래와 같이 지급하기로 한다.
        </p>
      </section>
    </div>
  );
};
export default RealEstateSales;
