import BookmarkedList from "../components/bookmark/BookmarkedList";
import HomeButton from "../components/home/button/HomeButton";
import Todo from "../components/home/todo/Todo";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-full relative px-[65px] pt-[50px]">
      <h1 className="text-5xl font-bold">즐겨찾기</h1>
      <BookmarkedList />
      <Todo />
      <div className="flex justify-end">
        <HomeButton>구글 달력</HomeButton>
        <HomeButton>오늘 할 일 메모</HomeButton>
      </div>
    </div>
  );
};

export default Home;
