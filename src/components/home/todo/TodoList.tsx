import React from "react";
import { TodoItem } from "../../../types/todotypes";
import TodoCheckbox from "./Checkbox";
import EditDelete from "./EditDelete";

interface TodoListPartProps {
  todos: TodoItem[]; // todos 배열에는 날짜 정보도 포함되어 있다고 가정
  onToggleTodo: (id: number) => void;
  onEditTodo: (id: number) => void; // 수정 핸들러
  onDeleteTodo: (id: number) => void; // 삭제 핸들러
  filteredTodos: TodoItem[];
  className: string;
  selectedDay: string;
}

const TodoListPart: React.FC<TodoListPartProps> = ({
  onToggleTodo,
  onEditTodo,
  onDeleteTodo,
  filteredTodos,
  className,
  selectedDay,
}) => {
  return (
    <div className={`${className} `}>
      {filteredTodos.length === 0 ? (
        <p className="text-center text-gray-500">
          {selectedDay} 할 일 목록이 없습니다
        </p>
      ) : (
        <ul className="space-y-2">
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className="flex flex-start items-center bg-white rounded"
            >
              <TodoCheckbox
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggleTodo(todo.id)}
              />
              <span className={`ml-2 text-[#8894A0]`}>{todo.text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoListPart;
