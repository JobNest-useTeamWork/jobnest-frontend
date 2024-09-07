import { TodoItem } from "../types/types";
import TodoCheckbox, { testFunction, testFunction2 } from "./Checkbox";

interface TodoListPartProps {
  todos: TodoItem[];
  onToggleTodo: (id: number) => void;
  className: string;
}

const TodoListPart: React.FC<TodoListPartProps> = ({
  todos,
  onToggleTodo,
  className,
}) => {
  return (
    <div className={`${className} flex flex-col`}>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-2 bg-white rounded shadow"
          >
            <TodoCheckbox type="checkbox" />
            <span
              className={`${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => onToggleTodo(todo.id)}
              className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListPart;
