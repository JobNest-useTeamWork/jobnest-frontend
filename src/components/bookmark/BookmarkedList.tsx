import {DndContext, DragEndEvent} from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import { useEffect, useState } from 'react';
import BookmarkedEachItem from './BookmarkedEachItem';
import { BookmarkInterface, getBookmarks } from '../../hooks/useBookmarks';
import { fetchOpenGraphData, OPEN_GRAPH_API_KEY } from '../../api/api';
import { useQuery } from '@tanstack/react-query';
import ManageDetailModal from './ManageDetailModal';


const BookmarkedList = () => {
    //console.log(OPEN_GRAPH_API_KEY);  // 출력해서 값이 제대로 들어오는지 확인

    const [gridItem, setGridItem] = useState<BookmarkInterface[]>([]);
    const [fetchUrl, setFetchUrl] = useState('');
    const [modalYn, setmodalYn] = useState(false);

    useEffect(() => {
        setGridItem(getBookmarks);
    },[]);

    const {data, error, isLoading, refetch} = useQuery( {
            queryKey: ['ogData', fetchUrl],
            queryFn: () => fetchOpenGraphData(fetchUrl),
            enabled: !!fetchUrl  // fetchUrl이 비어있지 않을 때만 쿼리를 실행하도록 설정
        }
    );
    console.log(data);
  
    const addBookmarks = async() => {
        //console.log(`clicked addBookmarks`);
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
                console.log(`newBookmarksOpd`,newBookmarksOpd);
                //add on Grid Item
                setGridItem((prevItem) => [...prevItem, newBookmarksOpd]);
                //initialize
                setFetchUrl('');

            } catch (error) {
                console.log(`Failed to add OPD`,error);   
            }
    }

    }


    //const gridArr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    //temporary dummy bookmark data
    // const dummy : BookmarkInterface[] = [
    //     {id: 1, url : 'https://www.naver.com/', img: '', title : 'naver'},
    //     {id: 2, url : 'https://www.notion.so/Jeong-Dasom-62a74a097ba44cbbb5cfee84c4dd4f59', img: '', title : 'JeongDasom'},
    //     {id: 3, url : 'https://github.com/racheljeong?tab=repositories', img: '', title : 'myRepo'}
    // ];

   

    const handleDragEnd = (event : DragEndEvent) => {
        const {active, over} = event;
        // 드래그 작업이 끝난 후 처리할 로직
        if(over && active.id !== over.id){
            setGridItem((prevItem) => {
                const oldIdx = prevItem.findIndex((item) => item.id === +active.id);
                const newIdx = prevItem.findIndex((item) => item.id === +over.id);
                console.log(`oldIdx :`, {oldIdx});
                console.log(`newIdx :`, {newIdx});

                return arrayMove(prevItem,oldIdx,newIdx);
            });
        };
    }

    //즐겨찾기 모달창
    const openManageModal = () => {
        console.log('clickedModal');
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