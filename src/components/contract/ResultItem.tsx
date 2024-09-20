import { contractType } from "../../types/contract";

const ResultItem = ({
  contract_date, // 계약일
  balance_date, // 잔금일
  end_date, // 만기일
  contract_type, // 계약서 유형
  transaction_type, // 거래 유형
  juso, // 소재지
  deposit, // 매매(보증)금
  seller, // 매도/임대인
  buyer, // 매수/임차인
  partner_realtor, // 공동 중개업소
  contract_num, // 계약서 번호
}: contractType) => {
  return (
    <>
      <div className="contract-search-grid px-[2px] py-[4px]">
        <input type="checkbox" />
        <div>{contract_date}</div>
        <div>{balance_date}</div>
        <div>{end_date}</div>
        <div>{contract_type}</div>
        <div>{transaction_type}</div>
        <div>{juso}</div>
        <div>{deposit}</div>
        <div>{seller}</div>
        <div>{buyer}</div>
        <div>{partner_realtor}</div>
        <div>계약 관리</div>
        <div>{contract_num}</div>
      </div>
    </>
  );
};
export default ResultItem;
