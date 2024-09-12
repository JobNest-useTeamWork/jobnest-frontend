import { useState } from "react"
import TodoListPart from "./TodoList"
import { TodoItem } from "../types/types"
import TodoInput from "./TodoInput"
import DateSelector from "./DateSelector"

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [selectedDay, setSelectedDay] = useState("오늘") // 선택된 날짜 (오늘/지난 내역)

  const addTodo = (text: string) => {
    const newTodo: TodoItem = {
      id: todos.length + 1,
      text,
      completed: false,
      date: new Date(),
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodoCompletion = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const handleDaySelect = (day: string) => {
    setSelectedDay(day)
  }

  const filteredTodos = todos.filter((todo) => {
    const todoDate = new Date(todo.date) // todo.date는 Date 객체라고 가정
    const today = new Date()

    if (selectedDay === "오늘") {
      return (
        todoDate.toDateString() === today.toDateString() // '오늘' 할 일 필터링
      )
    } else if (selectedDay === "지난 내역") {
      return todoDate < today // '지난 내역' 할 일 필터링
    }
    return true
  })

  return (
    <div className="relative w-[311px] min-h-[372px] bg-gray-100 h-auto shadow-2xl flex flex-col">
      <DateSelector selectedDay={selectedDay} onDaySelect={handleDaySelect} className="px-2" />
      <div className="flex-grow overflow-y-auto px-2 ">
        <TodoListPart
          className="w-full h-full"
          todos={todos}
          onToggleTodo={toggleTodoCompletion}
          filteredTodos={filteredTodos}
          selectedDay={selectedDay}
        />
      </div>
      <TodoInput onAddTodo={addTodo} className="h-[48px] border-t border-[#EDEDED] w-full bg-[#F8F8F8] mt-4" />
    </div>
  )
}

export default Todo
