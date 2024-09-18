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
    <>
      <div className="flex justify-between items-center">
        <div className="text-[14px] font-semibold">
          {`${data?.juso} 세종 세종시 증촌동 690 가재마을5단지 세종엠코타운/ 524동 302호 |
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

      <h1 className="text-[44px] text-center border border-[#CCCCCC] rounded-[6px]">
        부동산({`${data?.contract_type}`}) {`${data?.transition_type}`} 계약서
      </h1>
      <section>
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
      </section>
      <section>
        <p>계약내용</p>
        <p>
          제1조[목적] 위 부동산의 매매에 대하여 매도인과 매수인은 합의에 의하여
          매매 대금을 아래와 같이 지급하기로 한다.
        </p>
      </section>
    </>
  );
};
export default RealEstateSales;
