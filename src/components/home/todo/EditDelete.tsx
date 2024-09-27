import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

interface EditDeleteProps {
  todoId: string;
  todoText: string;
  onEdit: (id: string, newText: string) => void;
  onDelete: (id: string) => void;
  hoveredTodoId: string | null;
  onClick?: () => void; // Add this prop
  className?: string;
  onMouseEnter?: () => void;
}

const EditDelete: React.FC<EditDeleteProps> = ({
  todoId,
  todoText,
  onEdit,
  onDelete,
  onClick,
  hoveredTodoId,
  className,
  onMouseEnter,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todoText);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setDropdownOpen(false);
  };

  const handleEditSubmit = () => {
    onEdit(todoId, editText);
    setIsEditing(false);
  };

  const handleKeyboard = (e: React.KeyboardEvent) => {
    // if(e.key === 'Enter' || e.keyCode === 13) {
    if (e.key === "Enter") {
      // 엔터 키 입력 후 발생하는 이벤트 작성
      handleEditSubmit();
    }
  };

  return (
    <div
      className={`relative ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      {isEditing ? (
        <div className="flex items-center">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="mr-2 p-1 border rounded"
            autoFocus
            onKeyDown={handleKeyboard}
          />
          <button onClick={handleEditSubmit} className="text-blue-200">
            저장
          </button>
        </div>
      ) : (
        <>
          {hoveredTodoId === todoId && (
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-center text-gray-500"
            >
              <BsThreeDots />
            </button>
          )}
          {dropdownOpen && (
            //text-center px-4 hover:bg-gray-100 whitespace-nowrap border
            <div className="absolute right-0 mt-2 w-[66px] bg-white  shadow-lg z-10">
              <button
                onClick={handleEdit}
                className="block w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 border border-gray-200 border-b-0"
              >
                수정
              </button>
              <button
                onClick={() => {
                  onDelete(todoId);
                  setDropdownOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 border border-gray-200"
              >
                삭제
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default EditDelete;
