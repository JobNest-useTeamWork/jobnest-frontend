import ConfirmElevenTable from "./ConfirmElevenTable";
import ConfirmTwelveTable from "./ConfirmTwelveTable";

const ConfirmSecondPage = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <h1 className="text-[20px]">2. 개업공인중개사 세부 확인사항</h1>
      <div className="flex flex-col gap-2 border-y border-black py-4">
        <p>실제 권리관계 또는 공시되지 않은 물건의 권리 사항</p>
        <textarea
          name=""
          id=""
          placeholder="본 입력란에는 지상점유권, 구축물, 적치물, 진입로, 경작물, (특수)지역권, 법적지상권, 유치권, 임차인현황, 임대차 보증금 가압류, 채권양도 등 통지사실, 국세 지방세 체납여부, 경계침범 여부, 불법 형질변경 여부, 근저당, 경공매 등 기타 특이사항 등의 내용을 기입하는 란입니다."
          className="resize-none border-y border-black w-full contract-input p-2 border-line-color h-[60px]"
        ></textarea>
      </div>
      <ConfirmElevenTable />
      <ConfirmTwelveTable />
      <section className="grid grid-cols-[140px_140px_auto_140px_auto] border-y border-black items-center">
        <div className="row-span-2 border-r border-black text-center p-1 center-place h-full">
          ⑬환경 조건
        </div>
        <div className="border-r border-b border-black text-center p-1">
          일조량
        </div>
        <div className="border-r border-b border-black flex gap-2 p-1 col-span-3 ">
          <input type="radio" />
          <label htmlFor="">풍부함</label>
          <input type="radio" />
          <label htmlFor="">보통임</label>
          <input type="radio" />
          <label htmlFor="">불충분</label>
        </div>
        <div className="border-r border-black text-center p-1">소음</div>
        <div className="flex gap-2  p-1">
          <input type="radio" />
          <label htmlFor="">아주작음</label>
          <input type="radio" />
          <label htmlFor="">보통임</label>
          <input type="radio" />
          <label htmlFor="">심판 현임</label>
        </div>
        <div className="border-x border-black text-center p-1">진동</div>
        <div className="flex gap-2  p-1">
          <input type="radio" />
          <label htmlFor="">아주작음</label>
          <input type="radio" />
          <label htmlFor="">보통임</label>
          <input type="radio" />
          <label htmlFor="">심판 현임</label>
        </div>
      </section>
      <section className="grid grid-cols-[140px_140px_auto] border-y border-black items-center">
        <div className="border-r border-black text-center p-1">⑭ 현장안내</div>
        <div className="border-r border-black text-center p-1">현장안내자</div>
        <div className="flex gap-2  p-1">
          <input type="radio" />
          <label htmlFor="">개업공인중개사</label>
          <input type="radio" />
          <label htmlFor="">소속공인중개사</label>
          <input type="radio" />
          <label htmlFor="">중개보조원</label>
          <input type="radio" />
          <label htmlFor="">해당없음</label>
        </div>
      </section>
      <ul className="list-disc px-4">
        <li>
          “중개보조원”이라 함은 공인중개사가 아닌 자로서 개업공인중개사에게
          소속되어 중개대상물에 대한 현장안내 및 일반서무 등 개업공인중개사의
          중개업무와 관련된 단순한 업무를 보조하는 자를 말합니다.
        </li>
        <li>
          중개보조원은 법 제18조의4에 따라 현장안내 등 중개업무를 보조하는 경우
          중개의뢰인에게 본인이 중개보조원이라는 사실을 미리 고지하여야 합니다.
        </li>
      </ul>
    </div>
  );
};
export default ConfirmSecondPage;
