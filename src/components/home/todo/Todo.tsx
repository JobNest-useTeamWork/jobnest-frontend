import { useEffect, useState } from "react";
import TodoListPart from "./TodoList";
import TodoInput from "./TodoInput";
import DateSelector from "./DateSelector";
import { TodoItem } from "../../../types/todotypes";

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos")!)
      : []
  );
  const [selectedDay, setSelectedDay] = useState("오늘");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");

    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  const handleDaySelect = (day: string) => {
    setSelectedDay(day);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const filteredTodos = todos.filter((todo) => {
    const todoDate = new Date(todo.date); // todo.date는 Date 객체라고 가정
    const today = new Date();

    if (selectedDay === "오늘") {
      return (
        todoDate.toDateString() === today.toDateString() // '오늘' 할 일 필터링
      );
    } else if (selectedDay === "지난 내역") {
      return todoDate < today; // '지난 내역' 할 일 필터링
    }
    return true;
  });

  return (
    <div className="relative w-[311px] min-h-[372px] h-auto shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)]  flex flex-col">
      <div className="flex justify-between items-center px-2">
        <DateSelector
          selectedDay={selectedDay}
          onDaySelect={handleDaySelect}
          className="px-2 mr-3"
        />
      </div>
      <div className="flex-grow overflow-y-auto px-2 ">
        <TodoListPart
          className="w-full h-full"
          onToggleTodo={toggleTodoCompletion}
          filteredTodos={filteredTodos}
          selectedDay={selectedDay}
          onDeleteTodo={deleteTodo}
          onEditTodo={editTodo}
        />
      </div>

      <TodoInput
        onAddTodo={addTodo}
        className="h-[48px] border-t border-[#EDEDED] w-full bg-[#F8F8F8] mt-4 "
      />
    </div>
  );
};

export default Todo;
