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

  return (
    <div className={`${className} flex flex-col`}>
      {/* 날짜 선택 드롭다운 */}
      <div className="mb-4">
        <select
          value={selectedDay}
          onChange={(e) => handleDaySelect(e.target.value)}
          className=" rounded-md "
        >
          <option value="오늘">오늘</option>
          <option value="지난 내역">지난 내역</option>
        </select>
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
