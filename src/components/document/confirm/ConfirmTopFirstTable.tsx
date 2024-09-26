import { useId } from "react";

const ConfirmTopFirstTable = () => {
  const useid = useId();
  const selectData = [
    "등기 권리증",
    "등기사항증명서",
    "토지대장",
    "건축물대장",
    "지적도",
    "임야도",
    "토지이용계획확인서",
    "확정일자 부여현황",
    "전입세대 확인서",
    "국세납세 증명서",
    "지방세납세 증명서",
  ];
  const dataRequire =
    "거래당사자는 위 확인·설명근거자료 등에 대한 사항을 발급/열람, 검색을 통해 확인하였으며, 물건의 현장답사를 통해 육안으로 확인/인지한 후 개업공인중개사가 작성한 아래 10-14항에 대한 설명을 통해 각 항목 기재 사항을 확인하고 내용에 동의함.(등기권리증 미제출)";
  return (
    <section className="grid grid-cols-[140px_180px_auto] grid-rows-[80px_70px] border-y border-black">
      <div className="row-span-2 border-r border-black center-place">
        확인·설명 자료
      </div>
      <div className="border-b border-black center-place">
        확인·설명 근거자료 등
      </div>
      <div className="flex flex-col border-b border-black justify-center gap-[4px]">
        <div className="flex gap-[4px] flex-wrap">
          {selectData.map((val, index) => (
            <div
              key={`${useid}-${index}`}
              className="flex items-center gap-[4px]"
            >
              <input type="checkbox" id={val} />
              <label htmlFor={val}>{val}</label>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-[4px]">
          <input type="checkbox" />
          <label htmlFor="">그 밖의 자료</label>
          (<input type="text" />)
        </div>
      </div>
      <div className="center-place flex-col">
        <span>대상물건의 상태에 관한</span>
        <span>자료요구 사항</span>
      </div>
      <div className="center-place">
        <textarea className="w-full border border-[#D9D9D9] rounded-[4px] p-2 resize-none">
          {dataRequire}
        </textarea>
      </div>
    </section>
  );
};
export default ConfirmTopFirstTable;
