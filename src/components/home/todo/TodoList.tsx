import React, { useState } from "react";
import TodoCheckbox from "./Checkbox";
import EditDelete from "./EditDelete";
import { TodoItem } from "../../../types/todotypes";

interface TodoListPartProps {
  onToggleTodo: (id: string) => void;
  filteredTodos: TodoItem[];
  className: string;
  selectedDay: string;
  onDeleteTodo: (id: string) => void;
  onEditTodo: (id: string, newText: string) => void;
}

const TodoListPart: React.FC<TodoListPartProps> = ({
  onToggleTodo,
  filteredTodos,
  className,
  selectedDay,
  onDeleteTodo,
  onEditTodo,
}) => {
  const [hoveredTodoId, setHoveredTodoId] = useState<string | null>(null);

  return (
    <div className={`${className} mt-3`}>
      {filteredTodos.length === 0 ? (
        <p className="text-center text-gray-500">
          {selectedDay} 할 일 목록이 없습니다
        </p>
      ) : (
        <ul className="space-y-1">
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between h-[25px] bg-white rounded p-2 "
              onMouseEnter={() => setHoveredTodoId(todo.id)}
            >
              <div className="flex items-center flex-grow">
                <TodoCheckbox
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onToggleTodo(todo.id)}
                />
                <span
                  className={`ml-2  flex-grow ${
                    todo.isGoogle ? "text-[#347FFF]" : "text-[#8894A0]"
                  }`}
                >
                  {todo.text}
                </span>
              </div>
              <EditDelete
                todoId={todo.id}
                todoText={todo.text}
                onEdit={onEditTodo}
                onDelete={onDeleteTodo}
                hoveredTodoId={hoveredTodoId}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoListPart;
