import {DndContext, DragEndEvent} from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import {useState } from 'react';
import BookmarkedEachItem from './BookmarkedEachItem';
import { bookmarkDataInterface } from '../../hooks/useBookmarks';
import ManageDetailModal from './ManageDetailModal';

export interface manageModalInterface {
    closeModal : () => void;
    handleCheckedItems : (items : bookmarkDataInterface[]) => void;
    gridItems?: bookmarkDataInterface[]; // 부모로부터 받은 그리드 항목
}


const BookmarkedList = () => {

    const [gridItem, setGridItem] = useState<bookmarkDataInterface[]>([]);
    const [modalYn, setmodalYn] = useState(false);
   
    const updateGridItems = (checkedItems: bookmarkDataInterface[]) => {
        setGridItem(checkedItems);  // 체크된 항목으로 상태 업데이트
        console.log("Updated Grid Items:", checkedItems);  // 콘솔로 확인
    };
    

    const handleDragEnd = (event : DragEndEvent) => {
        const {active, over} = event;
        // 드래그 작업이 끝난 후 처리할 로직
        if(over && active.id !== over.id){
            setGridItem((prevItem) => {
                const oldIdx = prevItem.findIndex((item) => item.bookmarkId === active.id);
                const newIdx = prevItem.findIndex((item) => item.bookmarkId === over.id);

                return arrayMove(prevItem,oldIdx,newIdx);
            });
        };
    }

    //즐겨찾기 모달창
    const openManageModal = () => {
        setmodalYn((prev) => !prev);

    }

    return (
        <>
            <DndContext onDragEnd={handleDragEnd}>
                <SortableContext items={gridItem.map((item) => item.bookmarkId)}>
                <div className="grid-container grid grid-cols-7 gap-x-[30px] gap-y-[89px] pt-[46px]">
                    {gridItem.map((item) => (
                    <div key={item.bookmarkId} >
                        <BookmarkedEachItem bookmarkId={item.bookmarkId} bookmarkURL={item.bookmarkId} bookmarkTitle={item.bookmarkTitle} bookmarkOgImg={item.bookmarkOgImg} />
                    </div>
                    ))}
                </div>
                </SortableContext>
            </DndContext>
            <div className='border-slate-800 border-dashed flex justify-center items-center w-[180px] h-[180px] mb-[12px] bg-slate-100'>
                <button
                    className="w-[93px] h-[35px] bg-blue-500 m-5 font-suit font-semibold 
                    text-center text-[15px] leading-[15px] flex items-center
                    text-white rounded-md justify-center"
                    onClick={openManageModal} 
                >
                    관리하기
            </button>
        </div>
            {modalYn ? <ManageDetailModal closeModal={()=> setmodalYn(false)} handleCheckedItems={updateGridItems}/> : null}
        </>
    );
}

export default BookmarkedList;