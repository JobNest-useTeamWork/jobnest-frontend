


const BookmarkedList = () => {

    const tempArr = [1,2,3,4,5,6,7,8,9,10];

    return (
        <>
        <div className="flex grid-flow-col gap-2 size-10">
            {tempArr.map((a) => (
                <div className=" bg-slate-500 text-slate-100"  key={a}>a</div>
            ))}
        </div>
        </>

    );

}

export default BookmarkedList;