import { IoAlertCircleOutline } from "react-icons/io5";
const ConfirmFirstTable = () => {
  return (
    <section className="grid grid-cols-[130px_80px_130px_300px_70px_130px_auto] border-y border-black items-center">
      <div className="row-span-3">
        <div className="center-place">
          대상 물건의
          <br />
          표시
        </div>
        <button className="blue-button">PDF 열람 및 연동</button>
      </div>
      {/* 토지 내용 */}
      <div className="row-span-2">
        <div className="center-place">토지</div>
        <div className="center-place">
          공부연동
          <br />
          가능 항목
        </div>
      </div>
      {/* 첫 번째 행 */}
      <div className="center-place">소재지</div>
      <div className="col-span-4">
        <input type="text" className="contract-input" />
      </div>
      {/* 두 번째 행 & 세 번째 행 */}
      <div className="center-place">
        <span>면적(m2)</span>
        <IoAlertCircleOutline />
      </div>
      <div>
        <input type="text" />
      </div>
      <div className="center-place">지목</div>
      <div className="center-place">
        <span>공부상 지목</span>
        <IoAlertCircleOutline />
      </div>
      <div>
        <select name="" id="">
          <option value="대">대</option>
        </select>
      </div>
      <div className="center-place">실제 이용 상태</div>
      <div>
        <input type="text" />
      </div>
      {/* 건축물 내용 */}
      <div>
        <div>건축물</div>
        <div>
          공부연동
          <br />
          가능 항목
        </div>
      </div>
      <div className="center-place">전용면적(m2)</div>
      <div>
        <input type="text" />
      </div>
      <div className="col-span-2 center-place">대지지분(m2)</div>
      <div>
        <input type="text" />
      </div>
    </section>
  );
};
export default ConfirmFirstTable;
