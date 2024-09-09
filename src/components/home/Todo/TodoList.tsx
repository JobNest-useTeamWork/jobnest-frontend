import { TodoItem } from "../types/types";
import TodoCheckbox from "./Checkbox";

interface TodoListPartProps {
  todos: TodoItem[];
  onToggleTodo: (id: number) => void;
  className: string;
}

const TodoListPart: React.FC<TodoListPartProps> = ({
  todos = [],
  onToggleTodo,
  className,
}) => {
  return (
    <div className={`${className} flex flex-col`}>
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">오늘 할 일 목록이 없습니다</p>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center p-2 bg-white rounded shadow"
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
