import React, { useState } from "react"

interface TodoInputProps {
  onAddTodo?: (text: string) => void
  className?: string
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo, className }) => {
  const [text, setText] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      onAddTodo?.(text)
      setText("")
    }
  }

  return (
    <form className={`${className} relative`} onSubmit={handleSubmit}>
      <input
        className="w-full h-full text-lg font-normal px-[10px]"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="새로운 할 일 작성"
      />
      <button
        className="absolute right-[10px] top-1/2 -translate-y-1/2 w-[44px] h-[34px] bg-[#347FFF] text-[#FFFFFF] rounded-[6px] font-extrabold"
        type="submit"
      >
        입력
      </button>
    </form>
  )
}

export default TodoInput
