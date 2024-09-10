import {DndContext, DragEndEvent} from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import { useEffect, useState } from 'react';
import BookmarkedEachItem from './BookmarkedEachItem';
import { BookmarkInterface, getBookmarks } from '../../hooks/useBookmarks';
import { fetchOpenGraphData } from '../../api/api';
import ManageDetailModal from './ManageDetailModal';


const BookmarkedList = () => {

    const [gridItem, setGridItem] = useState<BookmarkInterface[]>([]);
    const [fetchUrl, setFetchUrl] = useState('');
    const [modalYn, setmodalYn] = useState(false);

    useEffect(() => {
        setGridItem(getBookmarks);
        console.log(gridItem);
    },[]);

    // const {data, error, isLoading, refetch} = useQuery( {
    //         queryKey: ['ogData', fetchUrl],
    //         queryFn: () => fetchOpenGraphData(fetchUrl),
    //         enabled: !!fetchUrl  // fetchUrl이 비어있지 않을 때만 쿼리를 실행하도록 설정
    //     }
    // );
    // console.log(data);
  
    const addBookmarks = async() => {
       
        if(fetchUrl) {
            try {
                //get Open Graph Date
                const data = await fetchOpenGraphData(fetchUrl);
                //add bookmarks
                const newBookmarksOpd : BookmarkInterface ={
                    id: Date.now(),  // 고유한 ID 
                    url: fetchUrl,
                    img: data.hybridGraph.image || '',
                    title: data.hybridGraph.title || ''
                };
                //add on Grid Item
                setGridItem((prevItem) => [...prevItem, newBookmarksOpd]);
                //initialize
                setFetchUrl('');

            } catch (error) {
                console.log(`Failed to add OPD`,error);   
            }
        }

    }


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
            <input className='bg-slate-50 border-solid border-blue-800' type='text' placeholder='URL' value={fetchUrl} onChange={(e) => setFetchUrl(e.target.value)} />
            <button onClick={addBookmarks} className='bg-blue-500 size-28 text-slate-50 m-5'>Add Bookmark</button>
            <button onClick={openManageModal} className="w-[53px] h-[11px] bg-blue-500 m-5 font-suit font-semibold text-[15px] leading-[15px] flex items-center text-white">
                관리하기
            </button>
            {modalYn ? <ManageDetailModal closeModal={()=> setmodalYn(false)}/> : null}
        </>
    );
}

export default BookmarkedList;