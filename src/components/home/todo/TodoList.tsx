import React, { useState } from "react";
import { TodoItem } from "../../../types/todotypes";
import TodoCheckbox from "./Checkbox";

interface TodoListPartProps {
  todos: TodoItem[]; // todos 배열에는 날짜 정보도 포함되어 있다고 가정
  onToggleTodo: (id: number) => void;
  filteredTodos: TodoItem[];
  className: string;
  selectedDay: string;
  onDeleteTodo: (id: number) => void;
  onEditTodo: (id: number, newText: string) => void;
}

const TodoListPart: React.FC<TodoListPartProps> = ({
  onToggleTodo,
  filteredTodos,
  className,
  selectedDay,
  onDeleteTodo,
  onEditTodo,
}) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className={`${className}`}>
      {filteredTodos.length === 0 ? (
        <p className="text-center text-gray-500">
          {selectedDay} 할 일 목록이 없습니다
        </p>
      ) : (
        <ul className="space-y-2">
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-white rounded p-2"
              onMouseEnter={() => setHoveredId(todo.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex items-center flex-grow">
                <TodoCheckbox
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onToggleTodo(todo.id)}
                />
                {editingId === todo.id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={() => {
                      onEditTodo(todo.id, editText);
                      setEditingId(null);
                    }}
                    className="ml-2 p-1 border rounded flex-grow"
                    autoFocus
                  />
                ) : (
                  <span className="ml-2 text-[#8894A0] flex-grow">
                    {todo.text}
                  </span>
                )}
              </div>
              {hoveredId === todo.id && (
                <div className="flex items-center">
                  <button
                    onClick={() => {
                      setEditingId(todo.id);
                      setEditText(todo.text);
                    }}
                    className="p-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                      <circle cx="5" cy="12" r="1" />
                    </svg>
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoListPart;
