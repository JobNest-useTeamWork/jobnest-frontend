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
      date: new Date(),
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
    <div className="relative flex flex-col w-[311px] h-[372px] bg-gray-200 ">
      <TodoListPart
        className="bg-blue-100 p-6 flex-grow"
        todos={todos}
        onToggleTodo={toggleTodoCompletion}
      />
      <TodoInput
        onAddTodo={addTodo}
        className="absolute bottom-0 h-[48px] border-[1px] border-[#EDEDED] w-full bg-[#F8F8F8] "
      />
    </div>
  );
};

export default Todo;
