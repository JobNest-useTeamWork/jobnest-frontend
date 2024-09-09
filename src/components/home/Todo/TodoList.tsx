import React, { useState } from "react";
import { TodoItem } from "../types/types";
import TodoCheckbox from "./Checkbox";

interface TodoListPartProps {
  todos: TodoItem[]; // todos 배열에는 날짜 정보도 포함되어 있다고 가정
  onToggleTodo: (id: number) => void;
  className: string;
}

const TodoListPart: React.FC<TodoListPartProps> = ({
  todos = [],
  onToggleTodo,
  className,
}) => {
  const [selectedDay, setSelectedDay] = useState("오늘"); // 선택된 날짜 (오늘/지난 내역)
  const [isSelectVisible, setIsSelectVisible] = useState(false);

  // 날짜 선택 변경 핸들러
  const handleDaySelect = (day: string) => {
    setSelectedDay(day);
  };

  // 날짜 필터링 로직
  const filteredTodos = todos.filter((todo) => {
    const todoDate = new Date(todo.date); // todo.date는 Date 객체라고 가정
    const today = new Date();

    if (selectedDay === "오늘") {
      return (
        todoDate.toDateString() === today.toDateString() // '오늘' 할 일 필터링
      );
    } else if (selectedDay === "지난 내역") {
      return todoDate < today; // '지난 내역' 할 일 필터링
    }
    return true;
  });

  const toggleSelect = () => {
    setIsSelectVisible(!isSelectVisible);
  };

  return (
    <div className={`${className} `}>
      {/* Toggle button and dropdown */}
      <div className="mb-4 flex items-start">
        <button
          onClick={toggleSelect}
          className="flex justify-between items-center bg-white text-gray-700 px-2 rounded leading-tight focus:outline-none focus:bg-white "
        >
          <span>{selectedDay}</span>
          <svg
            className="w-4 h-4 ml-2 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isSelectVisible && (
          <div className="ml-1 bg-white border border-gray-300 rounded shadow-lg items-center">
            <button
              onClick={() => {
                handleDaySelect("오늘");
                toggleSelect();
              }}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 whitespace-nowrap border ${
                selectedDay === "오늘" ? "" : "text-gray-500"
              }`}
            >
              오늘
            </button>
            <button
              onClick={() => {
                handleDaySelect("지난 내역");
                toggleSelect();
              }}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 whitespace-nowrap border ${
                selectedDay === "지난 내역" ? "" : "text-gray-500"
              }`}
            >
              지난 내역
            </button>
          </div>
        )}
      </div>

      {/* 할 일 목록 표시 */}
      {filteredTodos.length === 0 ? (
        <p className="text-center text-gray-500">
          {selectedDay} 할 일 목록이 없습니다
        </p>
      ) : (
        <ul className="space-y-2">
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className="flex flex-start items-center  bg-white rounded "
            >
              <TodoCheckbox type="checkbox" />
              <span className="text-gray-500 ml-2">{todo.text}</span>
              <button onClick={() => onToggleTodo(todo.id)}></button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoListPart;
