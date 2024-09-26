import { useLocation } from "react-router-dom";
import RealFirstTable from "./RealFirstTable";
import RealSecondTable from "./RealSecondTable";
import RealSignTable from "./RealSignTable";
import { useId } from "react";
import { IoAlertCircleOutline } from "react-icons/io5";
import RealAgentTable from "./RealAgentTable";

const clause = [
  [
    "제3조",
    "[제한물권 등의 소멸] 매도인은 위 부동산에 설정된 저당권, 지상권, 임차권 등 소유권의 행사를 제한하는 사유가 있거나, 제세공과금과 기타 부담금의 미납 등이 있을 때는 잔금 수수일까지 그 권리의 하자 및 부담 등을 제거하여 완전한 소유권을 매수인에게 이전한다. 다만, 승계하기로 합의하는 권리 및 금액은 그러하지 아니하다.",
  ],
  [
    "제4조",
    "[지방세 등] 위 부동산에 관하여 발생한 수익의 귀속과 제세공과금 등의 부담은 위 부동산의 인도일 기준으로 하되, 지방세의 납부 의무 및 납부 책임은 지방세법의 규정에 의한다.",
  ],
  [
    "제5조",
    "[계약의 해제] 매수인이 매도인에게 중도금(중도금이 없을 때는 잔금)을 지불하기 전까지, 매도인은 계약금의 배액을 상환하고, 매수인은 계약금을 포기하고 본 계약을 해제할 수 있다.",
  ],
  [
    "제6조",
    "[채무불이행과 손해배상의 예정] 매도인 또는 매수인은 본 계약상의 내용에 대하여 불이행이 있을 경우, 그 상대방은 불이행 한 자에 대하여 서면으로 최고하고 계약을 해제할 수 있다. 그리고 계약 당사자는 계약해제에 따른 손해배상을 각각 상대방에 대하여 청구할 수 있으며, 손해배상에 대하여 별도의 약정이 없는 한 계약금을 손해배상의 기준으로 본다.",
  ],
  [
    "제7조",
    "[중개보수] 개업공인중개사는 매도인 또는 매수인의 본계약 불이행에 대하여 책임지지 않는다. 또한, 중개보수는 본 계약 체결에 따라 계약 당사자가 쌍방이 각각 지불하며, 개업공인중개사의 고의나 과실 없이 본 계약이 무효, 취소 또는 해제되어도 중개보수는 지급한다. 공동중개인 경우에 매도인과 매수인은 자신이 중개 의뢰한 개업공인중개사에게 각각 중개보수를 지급한다.",
  ],
  [
    "제8조",
    "[중개보수 외] 매도인 또는 매수인이 본 계약 이외의 업무를 의뢰한 경우, 이에 관한 보수는 중개보수와는 별도로 지급하며 그 금액은 합의에 의한다.",
  ],
  [
    "제9조",
    "[중개대상물확인·설명서 교부 등] 개업공인중개사는 중개대상물확인·설명서를 작성하고, 업무보증관계증서 (공제증서 등) 사본을 첨부하여 거래당사자 쌍방에게 교부한다.",
  ],
];

const RealEstateSales = () => {
  const location = useLocation();
  const data = location.state;
  const useid = useId();

  return (
    <div className="flex flex-col gap-[40px] min-h-screen">
      {/* Title */}
      <h1 className="center-place text-[40px] p-2 font-medium border border-[#CCCCCC] rounded-[6px] leading-[60px]">
        부동산({`${data?.contract_type || "아파트"}`}){" "}
        {`${data?.transaction_type || "매매"}`} 계약서
      </h1>
      {/* 1. 부동산의 표시 */}
      <section className="flex flex-col gap-[10px]">
        <p className="font-medium">
          매도인과 매수인 쌍방은 아래 표시 부동산에 관하여 다음과 같이 매매
          계약을 체결한다
        </p>
        <div className="flex items-center gap-[8px]">
          <p>1. 부동산의 표시</p>
          <button className="blue-button px-[20px] py-[8px] text-[14px] print-hidden">
            PDF 열람 및 연동
          </button>
        </div>
        <div className="flex items-center gap-1 print-hidden">
          <IoAlertCircleOutline />
          <p className="text-black text-opacity-50 text-[14px]">
            공부연동이 가능한 항목입니다. 마우스로 클릭 시 기준 공부명을 확인할
            수 있습니다.
          </p>
        </div>
        {/* 표 */}
        <RealFirstTable />
        <p>원정 은 계약 시에 지급하고 영수함.</p>
      </section>
      {/* 2. 계약내용 */}
      <section className="flex flex-col gap-[10px]">
        <p>2. 계약내용</p>
        <p>
          제1조[목적] 위 부동산의 매매에 대하여 매도인과 매수인은 합의에 의하여
          매매 대금을 아래와 같이 지급하기로 한다.
        </p>
        {/* 표 */}
        <RealSecondTable />
        <p>
          제2조 [소유권 이전 등] 매도인은 매매대금의 잔금 수령과 동시에
          매수인에게 소유권 이전등기에 필요한 모든 서류를 교부하고 등기절차에
          협력 하여야 하며,
        </p>
        <div className="flex gap-[12px] items-center">
          <span>위 부동산의 인도일은</span>
          <input
            type="date"
            className="border border-line-color rounded-[4px] h-[32px]"
          />
          <span>로 한다.</span>
        </div>
      </section>
      {/* 조항 */}
      <section className="flex flex-col gap-[20px]">
        {clause.map((arr, index) => (
          <div className="flex gap-4 items-center" key={`${useid}-${index}`}>
            <div className="w-[40px]">{arr[0]}</div>
            <div className="w-full h-[70px] border border-[#CCCCCC] flex items-center p-[12px]">
              {arr[1]}
              <br />
              {index === 6 && "(교부일자 ________ 년 ________ 월 ________ 일)"}
            </div>
          </div>
        ))}
      </section>
      {/* 특약사항 */}
      <section className="mt-[100px]">
        <h3 className="mb-[16px] font-medium">특약사항</h3>
        <div className="h-[72px] text-[30px] font-medium border border-[#CCCCCC] bg-[#f8f8f9] px-[32px] py-[18px]">
          B
        </div>
        <div className="p-[44px] border border-[#a8a8a8] flex flex-col gap-2">
          <p>
            1. 현 시설 상태에서의 매매 계약이며, 등기사항 증명서를 확인하고,
            계약을 체결함
          </p>
          <p>2. 잔금 시까지의 각종 공과금은 매도자 부담으로 한다.</p>
          <p>
            3. 본 특약사항에 기재되지 않은 사항은 민법상 계약에 관한 규정과
            부동산매매 일반 관례에 따른다.
          </p>
          <p>
            4. 현 시설물 상태의 계약이나 계약시에 매도인이 고지하지 않은 부분에
            하자가 있을 경우, 하자담보책임과는 별개로 매도인은 이를 수리해주기로
            한다.
          </p>
          <p>
            5. __________________ 은행 채권최고액 금 __________________ 원
            상태의 계약으로 잔금일에 매도인이 상환하고 말소하기로 하며, 매도인은
            잔금일까지 채무를 부담하는 등의 새로운 권리변동을
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;일으키지 않도록 한다.
          </p>
          <p>
            6. 첨부서류 : 실제 첨부하여 교부한 서류만 기재. 예시)중개대상물 확인
            · 설명서
          </p>
        </div>
      </section>
      {/* 마무리멘트 */}
      <section className="w-full p-[30px] flex flex-col gap-[26px] center-place border border-[#CCCCCC] bg-[#E5E6EB]">
        <div>
          본 계약을 증명하기 위하여 계약 당사자가 이의 없음을 확인하고 각각 서명
          · 날인 후 매도인, 매수인, 개업공인중개사는 매 장마다 간인하여, 각각
          1통씩 보관한다.
        </div>
        <input type="date" className="contract-input w-[180px]" />
      </section>
      {/* 매도인/매수인/공인중개사 서명 */}
      <RealSignTable />
      <RealSignTable />
      <RealAgentTable />
    </div>
  );
};
export default RealEstateSales;
