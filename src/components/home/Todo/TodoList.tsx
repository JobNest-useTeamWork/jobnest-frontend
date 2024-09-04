import TodoInput from "./TodoInput";
import { TodoItem } from "../types/types";

interface TodoListPartProps {
  todos: TodoItem[];
  onAddTodo: (text: string) => void;
  onToggleTodo: (id: number) => void;
}

const TodoListPart: React.FC<TodoListPartProps> = ({
  todos,
  onAddTodo,
  onToggleTodo,
}) => {
  return (
    <>
      <div>
        할일 부분
        <div>왼쪽 토글</div>
        <TodoInput onAddTodo={onAddTodo} />
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => onToggleTodo(todo.id)}>
                {todo.completed ? "Undo" : "Complete"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoListPart;
