import {DndContext, DragEndEvent} from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import { useEffect, useState } from 'react';
import BookmarkedEachItem from './BookmarkedEachItem';
import { BookmarkInterface, getBookmarks } from '../../hooks/useBookmarks';
import { fetchOpenGraphData } from '../../api/api';
import ManageDetailModal from './ManageDetailModal';


const BookmarkedList = () => {

    const [gridItem, setGridItem] = useState<BookmarkInterface[]>([]);
    const [modalYn, setmodalYn] = useState(false);


    useEffect(() => {
        setGridItem(getBookmarks);
        console.log(gridItem);
    },[]);

    
  

    const handleDragEnd = (event : DragEndEvent) => {
        const {active, over} = event;
        // 드래그 작업이 끝난 후 처리할 로직
        if(over && active.id !== over.id){
            setGridItem((prevItem) => {
                const oldIdx = prevItem.findIndex((item) => item.id === +active.id);
                const newIdx = prevItem.findIndex((item) => item.id === +over.id);

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
                <SortableContext items={gridItem.map((item) => item.id)}>
                <div className="grid-container grid grid-cols-7 gap-x-[30px] gap-y-[89px] pt-[46px]">
                    {gridItem.map((item) => (
                    <div key={item.id} >
                        <BookmarkedEachItem id={item.id} url={item.url} title={item.title} img={item.img} />
                    </div>
                    ))}
                </div>
                </SortableContext>
            </DndContext>
            <button onClick={openManageModal} 
                    className="w-[93px] h-[35px] bg-blue-500 m-5 font-suit font-semibold 
                                text-center text-[15px] leading-[15px] flex items-center
                                 text-white rounded-md justify-center">
                관리하기
            </button>
            {modalYn ? <ManageDetailModal closeModal={()=> setmodalYn(false)}/> : null}
        </>
    );
}

export default BookmarkedList;