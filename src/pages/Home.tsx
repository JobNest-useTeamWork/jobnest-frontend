import BookmarkedList from "../components/bookmarkedList/BookmarkedList";


const Home = () => {
  return (
      <div className='flex flex-col w-full h-full relative px-[65px] pt-[50px]'>
        <h1 className="text-5xl font-bold">즐겨찾기</h1>
        <BookmarkedList />
      </div>
  );
};
export default Home;
