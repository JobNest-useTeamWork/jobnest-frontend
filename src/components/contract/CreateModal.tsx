const CreateModal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div className="modal bg-white absolute p-[40px] rounded-[10px] flex flex-col gap-[26px]">
      <h1 className="text-[24px] font-medium">계약서 작성</h1>
      <form className="grid grid-cols-[80px_150px_80px_150px] gap-6">
        <div className="font-medium">계약서 종류</div>
        <select
          className="border border-border-color text-[#6f6f6f] rounded-[6px] p-[4px] text-[14px]"
          name=""
          id=""
        >
          <option value="">선택</option>
        </select>
        <div className="font-medium">거래 유형</div>
        <select
          className="border border-border-color text-[#6f6f6f] rounded-[6px] p-[4px] text-[14px]"
          name=""
          id=""
        >
          <option value="">선택</option>
        </select>
      </form>
      <div>
        <div className="font-medium">주소 입력</div>
        <input
          className="border border-border-color rounded-[6px] p-[4px] mt-[10px] w-full"
          type="text"
          placeholder="주소를 입력해주세요"
        />
      </div>
      <div className="flex justify-center items-center gap-4 mt-[16px]">
        <button
          className="font-medium border border-border-color rounded-[6px] w-[100px] h-[36px]"
          onClick={closeModal}
        >
          취소
        </button>
        <button
          className="font-medium bg-[#335995] text-white rounded-[6px] w-[120px] h-[36px]"
          type="submit"
        >
          계약서 작성
        </button>
      </div>
    </div>
  );
};
export default CreateModal;
