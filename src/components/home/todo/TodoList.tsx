import React, { useEffect, useState } from "react";
import TodoCheckbox from "./Checkbox";
import EditDelete from "./EditDelete";
import {
  initializeGoogleAuth,
  signIn,
  signOut,
  isSignedIn,
  fetchGoogleTasks,
} from "../../../utils/googleAuth";
import { TodoItem } from "../types/types";

interface TodoListPartProps {
  onToggleTodo: (id: number) => void;
  filteredTodos: TodoItem[];
  className: string;
  selectedDay: string;
  onDeleteTodo: (id: number) => void;
  onEditTodo: (id: number, newText: string) => void;
}

const TodoListPart: React.FC<TodoListPartProps> = ({
  onToggleTodo,
  filteredTodos,
  className,
  selectedDay,
  onDeleteTodo,
  onEditTodo,
}) => {
  const [isGoogleSignedIn, setIsGoogleSignedIn] = useState(false);
  const [googleTasks, setGoogleTasks] = useState<any[]>([]);

  useEffect(() => {
    initializeGoogleAuth()
      .then(() => {
        setIsGoogleSignedIn(isSignedIn());
        if (isSignedIn()) {
          fetchGoogleTasksData();
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const fetchGoogleTasksData = async () => {
    try {
      const tasks = await fetchGoogleTasks();
      setGoogleTasks(tasks);
    } catch (error) {
      console.error("Error fetching Google Tasks:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signIn();
      setIsGoogleSignedIn(true);
      fetchGoogleTasksData();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleGoogleSignOut = async () => {
    try {
      await signOut();
      setIsGoogleSignedIn(false);
      setGoogleTasks([]);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className={`${className}`}>
      {isGoogleSignedIn ? (
        <button
          onClick={handleGoogleSignOut}
          className="mb-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Sign out of Google
        </button>
      ) : (
        <button
          onClick={handleGoogleSignIn}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Sign in with Google
        </button>
      )}

      {filteredTodos.length === 0 && googleTasks.length === 0 ? (
        <p className="text-center text-gray-500">
          {selectedDay} 할 일 목록이 없습니다
        </p>
      ) : (
        <ul className="space-y-2">
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-white rounded p-2"
            >
              <div className="flex items-center flex-grow">
                <TodoCheckbox
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onToggleTodo(todo.id)}
                />
                <span className="ml-2 text-[#8894A0] flex-grow">
                  {todo.text}
                </span>
              </div>
              <EditDelete
                todoId={todo.id}
                todoText={todo.text}
                onEdit={onEditTodo}
                onDelete={onDeleteTodo}
              />
            </li>
          ))}
          {googleTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-white rounded p-2"
            >
              <div className="flex items-center flex-grow">
                <TodoCheckbox
                  type="checkbox"
                  checked={task.status === "completed"}
                  onChange={() => {
                    /* Implement Google Task update logic */
                  }}
                />
                <span className="ml-2 text-[#8894A0] flex-grow">
                  {task.title}
                </span>
              </div>
              {/* Implement Google Task edit/delete functionality */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoListPart;
