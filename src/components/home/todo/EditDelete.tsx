import React, { useState } from "react";

interface EditDeleteProps {
  onEdit: () => void;
  onDelete: () => void;
}

const EditDelete: React.FC<EditDeleteProps> = ({ onEdit, onDelete }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="text-gray-500">
        ...
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <button
            onClick={() => {
              onEdit();
              setDropdownOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            수정
          </button>
          <button
            onClick={() => {
              onDelete();
              setDropdownOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default EditDelete;
