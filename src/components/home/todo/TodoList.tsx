import React from "react";
import { TodoItem } from "../../../types/todotypes";
import TodoCheckbox from "./Checkbox";
import EditDelete from "./EditDelete";

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
              <EditDelete
                todoId={todo.id}
                todoText={todo.text}
                onEdit={onEditTodo}
                onDelete={onDeleteTodo}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoListPart;
