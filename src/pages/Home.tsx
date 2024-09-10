import BookmarkedList from "../components/bookmarkedList/BookmarkedList";
import Todo from "../components/home/Todo/Todo";


const Home = () => {
  return (
      <div className='flex flex-col w-full h-full relative px-[65px] pt-[50px]'>
        <h1 className="text-5xl font-bold">즐겨찾기</h1>
        <BookmarkedList />
        <Todo />
      </div>
  );
};
export default Home;
