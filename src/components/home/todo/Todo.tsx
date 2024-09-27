import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import DateSelector from "./DateSelector";

import {
  getAllEvents,
  getUserEmail,
  GoogleLoginComponent,
} from "../../../utils/googleAuth";
import { TodoItem, CalendarEvent } from "../../../types/todotypes";
import TodoListPart from "./TodoList";
import { isBefore, isSameDay, startOfDay } from "date-fns";

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos")!)
      : []
  );
  const [selectedDay, setSelectedDay] = useState("오늘");
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const [accessToken, setAccessToken] = useState<string | null>(
    localStorage.getItem("googleAccessToken")
  );
  const [userEmail] = useState<string>(
    localStorage.getItem("userEmail") || getUserEmail()
  );

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");

    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("googleAccessToken");
    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    }
  }, []);

  useEffect(() => {
    const fetchCalendarEvents = async () => {
      if (accessToken) {
        const events = await getAllEvents(accessToken, userEmail);
        setCalendarEvents(events);
        if (Array.isArray(events)) {
          const calendarTodos = events.map((event) => ({
            id: event.id,
            text: event.summary,
            completed: false,
            date: new Date(event.start.date),
            isGoogle: true,
          }));

          setTodos((prevTodos) => {
            const existingIds = new Set(prevTodos.map((todo) => todo.id));
            const newTodos = calendarTodos.filter(
              (todo) => !existingIds.has(todo.id)
            );
            return [...prevTodos, ...newTodos];
          });
        } else {
          console.error("Expected events to be an array, but got:", events);
        }
      }
    };
    try {
      fetchCalendarEvents();
    } catch (error) {
      console.log("error");
      console.error("Error fetching calendar events:", error);
    }
  }, [accessToken]);

  const addTodo = (text: string) => {
    const newTodo: TodoItem = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      date: new Date(),
      isGoogle: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodoCompletion = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDaySelect = (day: string) => {
    setSelectedDay(day);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  function filteredTodos(todos: TodoItem[], selectedDay: string): TodoItem[] {
    return todos.filter((todo) => {
      console.log(todo);
      const todoDate = startOfDay(new Date(todo.date)); // Normalize todo.date to start of the day
      const today = startOfDay(new Date()); // Normalize today to start of the day

      if (selectedDay === "오늘") {
        // Check if the todoDate is the same as today
        return isSameDay(todoDate, today);
      } else if (selectedDay === "지난 내역") {
        // Check if the todoDate is before today
        return isBefore(todoDate, today);
      }

      // Return all todos if no specific filter is selected
      return true;
    });
  }

  console.log(calendarEvents);

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
          filteredTodos={filteredTodos(todos, selectedDay)}
          selectedDay={selectedDay}
          onDeleteTodo={deleteTodo}
          onEditTodo={editTodo}
        />
      </div>
      <GoogleLoginComponent />
      <TodoInput
        onAddTodo={addTodo}
        className="h-[48px] border-t border-[#EDEDED] w-full bg-[#F8F8F8] mt-4 "
      />
    </div>
  );
};

export default Todo;
