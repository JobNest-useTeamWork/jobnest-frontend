import React, { useState } from "react";

interface TodoInputProps {
  onAddTodo?: (text: string) => void;
  className?: string;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo, className }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo?.(text);
      setText("");
    }
  };

  return (
    <form className={`${className} flex`} onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="새로운 할 일 작성"
        className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        입력
      </button>
    </form>
  );
};

export default TodoInput;
