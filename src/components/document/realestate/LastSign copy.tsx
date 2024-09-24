const LastSign = () => {
  return (
    <>
      <section className="grid grid-cols-[190px_auto_190px] border border-line-color">
        {/* 첫 번째 열 */}
        <div className="cols-span-2 w-[190px] border-r border-line-color p-2 bg-[#E5E6EB]">
          <div className="center-place m-[10px]">매도인</div>
          <button className="center-place bg-[#747474] text-white w-full h-[30px] mt-[4px]">
            고객검색
          </button>
        </div>
        {/* 중간 */}
        <div className="grid grid-rows-[1fr_1fr]">
          <div className="grid grid-cols-[190px_auto] items-center">
            <div className="border border-line-color">주소</div>
            <div className="w-full">
              <input type="text" />
            </div>
          </div>
          <div className="grid grid-cols-[190px_190px_1fr_2fr_1fr_2fr] items-center">
            <div className="border border-line-color">
              <select name="" id="" className="w-full">
                <option value="">주민등록번호</option>
              </select>
            </div>
            <div>
              <input type="text" />
            </div>
            <div>전화</div>
            <div>
              <input type="text" />
            </div>
            <div>성명</div>
            <div>
              <input type="text" />
            </div>
          </div>
        </div>
        {/* 마지막 열 */}
        <div className="border border-line-color">(인)</div>
      </section>
    </>
  );
};
export default LastSign;
