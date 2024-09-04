import { useState } from "react";
import TodoListPart from "./TodoList";
import { TodoItem } from "../types/types";

const Todo = () => {
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
    <>
      <TodoListPart
        todos={todos}
        onAddTodo={addTodo}
        onToggleTodo={toggleTodoCompletion}
      />
    </>
  );
};

export default Todo;
