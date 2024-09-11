
interface closeModalInterface {
    closeModal : () => void;
}


const ManageDetailModal = ({closeModal} : closeModalInterface) => {


    return (
        <div className="fixed top-1/2 left-1/2 w-[311px] h-[566px] bg-white border border-black transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-full h-[51px] flex justify-between">
                <span className="w-[98px] h-[22px]">즐겨찾기 관리</span>
                <span onClick={closeModal} className="w-[25px] h-[17px]">닫기</span>
            </div>
            <div>
            </div>
            <button>페이지 추가</button>
        </div>
    );
}

export default ManageDetailModal;