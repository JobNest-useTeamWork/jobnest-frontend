import BookmarkedList from "../components/bookmark/BookmarkedList";
import Todo from "../components/home/todo/Todo";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-full relative px-[65px] pt-[50px]">
      <h1 className="text-4xl font-bold font-suit">즐겨찾기</h1>
      <BookmarkedList />
      <Todo />
    </div>
  );
};

export default Home;
