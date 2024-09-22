import React, { useState } from "react";
import TodoCheckbox from "./Checkbox";
import EditDelete from "./EditDelete";
import { TodoItem } from "../../../types/todotypes";

interface TodoListPartProps {
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
  const [hoveredTodoId, setHoveredTodoId] = useState<number | null>(null);

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
              className="flex items-center justify-between h-[25px] bg-white rounded p-2"
              onMouseEnter={() => setHoveredTodoId(todo.id)}
              onMouseLeave={() => setHoveredTodoId(null)}
            >
              <div className="flex items-center flex-grow">
                <TodoCheckbox
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onToggleTodo(todo.id)}
                />
                <span className="ml-2 text-[#8894A0] flex-grow">
                  {todo.text}
                </span>
              </div>
              {hoveredTodoId === todo.id && (
                <EditDelete
                  todoId={todo.id}
                  todoText={todo.text}
                  onEdit={onEditTodo}
                  onDelete={onDeleteTodo}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoListPart;
