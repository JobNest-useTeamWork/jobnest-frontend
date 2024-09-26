const ConfirmTwelveTable = () => {
  return (
    <section className="grid grid-cols-[140px_140px_140px_auto] border-y border-black items-center">
      <div className="row-span-4 border-r border-black h-full center-place p-6">
        ⑫벽면 ·바닥면 및 도배상태
      </div>
      <div className="row-span-2 border-r border-b border-black h-full center-place p-1">
        벽면
      </div>
      <div className="border-r border-b border-black h-full center-place p-1">
        균열
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
        누수
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
        바닥면
      </div>
      <div className="col-span-2 flex gap-2 p-1 border-b border-black">
        <input type="radio" />
        <label htmlFor="">깨끗함</label>
        <input type="radio" />
        <label htmlFor="">보통임</label>
        <input type="radio" />
        <label htmlFor="">수선필요</label>
      </div>
      <div className="border-r border-black h-full center-place p-1">도배</div>
      <div className="col-span-2 flex gap-2  p-1">
        <input type="radio" />
        <label htmlFor="">깨끗함</label>
        <input type="radio" />
        <label htmlFor="">보통임</label>
        <input type="radio" />
        <label htmlFor="">도배필요</label>
      </div>
    </section>
  );
};
export default ConfirmTwelveTable;
