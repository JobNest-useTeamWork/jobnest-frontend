import { IoClose } from "react-icons/io5"; 
import { BookmarkInterface } from "../../hooks/useBookmarks";
import { useState } from "react";
import BookmarkedEachItem from "./BookmarkedEachItem";
import { fetchOpenGraphData } from "../../api/api";
import { useQuery } from "@tanstack/react-query";



interface closeModalInterface {
    closeModal : () => void;
}




const chkBookmarkedOne = (checked : boolean, item : string) => {
    console.log(typeof item);
    // if(checked){
    //     setGridItem((prev) => [...prev, item]);
    // }
}


const ManageDetailModal = ({closeModal} : closeModalInterface) => {

    const [listItem, setListItem] = useState<BookmarkInterface[]>([]);
    const [fetchUrl, setFetchUrl] = useState('');
    const [addModalYn, setAddModalYn] = useState(false);
    const [dropDownState, setDropDownState] = useState<{[key : string] : boolean}>({});

    const tempArr = [
        { id: "1", title : "네이버"}, 
        { id: "2", title : "카카오"}, 
        { id: "3", title : "노션"}, 
        { id: "4", title : "깃허브"}, 
    ];

//     const {data, error, isLoading, refetch} = useQuery( {
//         queryKey: ['ogData', fetchUrl],
//         queryFn: () => fetchOpenGraphData(fetchUrl),
//         enabled: !!fetchUrl  // fetchUrl이 비어있지 않을 때만 쿼리를 실행하도록 설정
//     }
// );
// console.log(data);


    const toggleDropdown = (id :string) => {
        console.log(id);
        setDropDownState((prev) => ({
            ...prev,
            [id] : !prev![id]
        }));


    }


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
                console.log(`newBookmarksOpd`, newBookmarksOpd);
                //add on Grid Item
                setListItem((prevItem) => [...prevItem, newBookmarksOpd]);
                //initialize
                setFetchUrl('');
    
            } catch (error) {
                console.log(`Failed to add OPD`,error);   
            }
        }
    
    }

    const addBookmarksModal = () => {
        setAddModalYn((prev) => !prev);
    }

    // 모달 fixed top-1/2 left-1/2 추가필요
    return (
        <div style={{
              position: 'absolute', // 부모 모달의 위치를 설정
              top: '30%', 
              left: '60%',
              right: '20%',
              bottom: '30%',
          }}className="w-[311px] h-[566px] bg-white border border-black transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-full h-[51px] flex justify-between p-2">
                <span className="w-[120px] h-[22px] text-center font-medium text-lg">즐겨찾기 관리</span>
                <span onClick={closeModal} className="w-[25px] h-[17px]">
                    <IoClose size={28}/>
                </span>
            </div>
            {/* {listItem.map((item) => (
                <div key={item.id} >
                    <label className="text-gray-500" key={item.id}>
                        <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                id={item.id +""} onChange={(e) => {chkBookmarkedOne(e.target.checked, e.target.value)}}/>
                    </label>
                </div>
            ))} */}
            {tempArr.map((item) => (
                <>
                <div key={item.id} className="group flex flex-row justify-between p-1">
                    <label className="text-gray-500 rounded-sm" key={item.id}>
                       <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                id={item.id +""} onChange={(e) => {chkBookmarkedOne(e.target.checked, e.target.value)}}/>
                    {item.title}
                    </label>
                    {/* 점 세개 버튼 */}
                    <div className="relative flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity "
                            onClick={() => toggleDropdown(item.id)}>
                       <span className="text-lg font-semibold">&#8230;</span> 
                    </button>
                    </div>
                    {/* 드롭다운 메뉴 */}
                    {dropDownState![item.id] && (
                        <div className="absolute right-0 mt-2 w-24 bg-white border rounded-md shadow-lg">
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">수정</button>
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">삭제</button>
                        </div>
                    )}
                </div>
               </>
            ))}
            <div className="flex justify-center">
                <button onClick={addBookmarksModal} className="absolute bottom-3 w-[271px] h-[53px] bg-slate-50 text-main-color border-[1px] ">
                    페이지 추가
                </button>
                {addModalYn && (
                    <div style={{
                          position: 'absolute', // 자식 모달의 위치를 설정
                          top: '30%', 
                          left: '90%',
                          right: '0%',
                          bottom: '30%',
                          transform: 'translateX(-10%)', // 자식 모달을 중앙에 위치시킵니다
                      }} className="flex flex-col w-[311px] h-[220px] rounded-md border-[1px] gap-2 justify-center">
                        <div className="flex flex-col gap-2 items-center">
                            <input type="text" className="w-[267px] h-[41px] rounded-md border-[1px] p-2" placeholder="사이트"/>
                            <input type="text" value={fetchUrl} onChange={(e) => setFetchUrl(e.target.value)} className="w-[267px] h-[41px] rounded-md border-[1px] p-2" placeholder="URL"/>
                        </div>
                        <div className="flex row-col gap-4 justify-center">
                            <button onClick={closeModal} className="w-[58px] h-[34px] rounded-md border-[1px]">취소</button>
                            <button onClick={addBookmarks} className="w-[58px] h-[34px] rounded-md bg-slate-400">저장</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ManageDetailModal;