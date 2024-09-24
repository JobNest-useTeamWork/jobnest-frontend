import { useState } from "react";
import BookmarkedList from "../components/bookmark/BookmarkedList";

import Todo from "../components/home/todo/Todo";
import HomeButton from "../components/home/button/BottomButton";

const Home = () => {
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div className="flex flex-col justify-between w-full h-full relative p-[50px]">
      <h1 className="font-suit text-[40px] text-[#151515] font-extrabold">
        즐겨찾기
      </h1>
      <BookmarkedList />
      {/* <div className="flex justify-end">
        <HomeButton>구글 달력</HomeButton>
        <div className="relative">
          {showTodo && (
            <div className="absolute bottom-[180px] right-10">
              <Todo />
            </div>
          )}
          <HomeButton onClick={() => setShowTodo(!showTodo)}>
            오늘 할 일 메모
          </HomeButton>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
