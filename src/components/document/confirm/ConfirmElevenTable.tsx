const ConfirmElevenTable = () => {
  return (
    <section className="grid grid-cols-[140px_140px_140px_auto] border-y border-black items-center">
      <div className="row-span-10 border-r border-black center-place h-full">
        ⑪ 내부·외부 시설 물의 상태(건축물)
      </div>
      <div className="row-span-2 border-r border-black h-full center-place p-6">
        수도
      </div>
      <div className="border-r border-b border-black h-full center-place p-1">
        파손 여부
      </div>
      <div className="border-b border-black flex gap-2 p-1 items-center">
        <input type="radio" />
        <label htmlFor="">없음</label>
        <input type="radio" />
        <label htmlFor="">있음</label>
        <span>( 위치 : </span>
        <input type="text" className="w-[580px] contract-input bg-[#F8F8F9]" />
        <span>)</span>
      </div>
      <div className="border-r border-b border-black h-full center-place p-1">
        용수량
      </div>
      <div className="border-b border-black flex gap-2 p-1 items-center">
        <input type="radio" />
        <label htmlFor="">정상</label>
        <input type="radio" />
        <label htmlFor="">부족함</label>
        <span>( 위치 : </span>
        <input type="text" className="w-[580px] contract-input bg-[#F8F8F9]" />
        <span>)</span>
      </div>
      <div className="border-r border-b border-black h-full center-place p-1">
        전기
      </div>
      <div className="border-r border-b border-black h-full center-place p-1">
        공급상태
      </div>
      <div className="border-b border-black flex gap-2 p-1 items-center">
        <input type="radio" />
        <label htmlFor="">정상</label>
        <input type="radio" />
        <label htmlFor="">교체필요</label>
        <span>( 교체할 부분 : </span>
        <input type="text" className="w-[580px] contract-input bg-[#F8F8F9]" />
        <span>)</span>
      </div>
      <div className="border-r border-b border-black h-full center-place p-1">
        가스(취사용)
      </div>
      <div className="border-r border-b border-black h-full center-place p-1">
        공급상태
      </div>
      <div className="border-b border-black flex gap-2 p-1 items-center">
        <input type="radio" />
        <label htmlFor="">도시가스</label>
        <input type="radio" />
        <label htmlFor="">그 밖의 방식</label>
        <span>( </span>
        <input type="text" className="w-[580px] contract-input bg-[#F8F8F9]" />
        <span>)</span>
      </div>
      {/* 소방 */}
      <div className="border-r border-b border-black h-full center-place p-1">
        소방
      </div>
      <div className="border-r border-b border-black h-full center-place p-1">
        단독경보형감지기
      </div>
      <div className="border-b border-black flex gap-2 p-1 items-center">
        <input type="radio" />
        <label htmlFor="">없음</label>
        <input type="radio" />
        <label htmlFor="">있음</label>
        <span>( 수량 : </span>
        <input type="text" className="w-[580px] contract-input bg-[#F8F8F9]" />
        <span>개 )</span>
      </div>
      <div className="border-r border-b border-black h-full center-place p-1">
        승강기
      </div>
      <div className="col-span-2 border-b border-black flex gap-2 p-1 items-center">
        <input type="radio" />
        <label htmlFor="">있음</label>
        <span>(</span>
        <input type="radio" />
        <label htmlFor="">양호</label>
        <input type="radio" />
        <label htmlFor="">불량</label>
        <span>)</span>
        <input type="radio" />
        <label htmlFor="">없음</label>
      </div>
      <div className="border-r border-b border-black h-full center-place p-1">
        배수
      </div>
      <div className="col-span-2 border-b border-black flex gap-2 p-1 items-center">
        <input type="radio" />
        <label htmlFor="">정상</label>
        <input type="radio" />
        <label htmlFor="">수선필요</label>
        <span> ( </span>
        <input type="text" className="w-[580px] contract-input bg-[#F8F8F9]" />
        <span>)</span>
      </div>
      <div className="border-r border-black h-full center-place p-1">
        그 밖의 시설물
      </div>
      <div className="col-span-2 p-1">
        <input type="text" className="w-full contract-input" />
      </div>
    </section>
  );
};
export default ConfirmElevenTable;
