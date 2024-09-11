import React, { useState } from "react";

interface EditDeleteProps {
  todoId: number;
  todoText: string;
  onEdit: (id: number, newText: string) => void;
  onDelete: (id: number) => void;
}

const EditDelete: React.FC<EditDeleteProps> = ({
  todoId,
  todoText,
  onEdit,
  onDelete,
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

  return (
    <div className="relative">
      {isEditing ? (
        <div className="flex items-center">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="mr-2 p-1 border rounded"
            autoFocus
          />
          <button onClick={handleEditSubmit} className="text-blue-500">
            저장
          </button>
        </div>
      ) : (
        <>
          <button onClick={toggleDropdown} className="text-gray-500">
            ...
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <button
                onClick={handleEdit}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                수정
              </button>
              <button
                onClick={() => {
                  onDelete(todoId);
                  setDropdownOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
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
