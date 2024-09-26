import { useState } from "react";
import BookmarkedList from "../components/bookmark/BookmarkedList";

import Todo from "../components/home/todo/Todo";
import HomeButton from "../components/home/button/BottomButton";
import Calendar from "../components/home/calendar/Calendar";
import { getUserEmail } from "../utils/googleAuth";

const Home = () => {
  const [showTodo, setShowTodo] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [userEmail] = useState<string>(
    localStorage.getItem("userEmail") || getUserEmail()
  );

  return (
    <div className="flex flex-col w-full h-full justify-between relative p-[50px]">
      <div className="flex flex-col gap-[20px]">
        <h1 className="font-suit text-[40px] text-[#151515] font-extrabold">
          즐겨찾기
        </h1>
        <BookmarkedList />
      </div>
      {showCalendar && (
        <div>
          <Calendar email={userEmail} />
        </div>
      )}
      <div className="flex justify-end">
        <HomeButton onClick={() => setShowCalendar(!showCalendar)}>
          구글 달력
        </HomeButton>
        <div className="relative">
          {showTodo && (
            <div className="bg-white absolute bottom-[180px] right-10 z-[500]">
              <Todo />
            </div>
          )}
          <HomeButton onClick={() => setShowTodo(!showTodo)}>
            오늘 할 일 메모
          </HomeButton>
        </div>
      </div>
    </div>
  );
};

export default Home;
