import { useState } from "react";
import TodoListPart from "./TodoList";
import { TodoItem } from "../types/types";
import TodoInput from "./TodoInput";

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (text: string) => {
    const newTodo: TodoItem = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodoCompletion = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="flex flex-col w-[311px] bg-gray-200 p-2.5">
      <TodoListPart
        className="bg-blue-100 p-6 flex-grow"
        todos={todos}
        onToggleTodo={toggleTodoCompletion}
      />
      <TodoInput
        onAddTodo={addTodo}
        className="mt-4 h-[48px] border-[1px] w-full bg-gray-200 p-2.5"
      />
    </div>
  );
};

export default Todo;
