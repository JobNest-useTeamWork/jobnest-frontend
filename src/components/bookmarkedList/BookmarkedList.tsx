import { useState } from "react";


const BookmarkedList = () => {

    const gridArr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    const [gridItem, setGridItem] = useState();

    return (
        <div className="grid grid-cols-7 gap-x-[30px] gap-y-[89px] pt-[46px]">
            {gridArr.map((g) => (
            <div>
                <div className="size-44 bg-slate-300 text-slate-100 border-black border-[1px]">{g}</div>
                <button className="absolute w-[181px] h-[34px] text-center">페이지 이름</button>
            </div>
            ))}
        </div>

    );
}

export default BookmarkedList;