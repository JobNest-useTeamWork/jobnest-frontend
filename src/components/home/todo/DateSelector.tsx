import React, { useState } from "react";

interface DateSelectorProps {
  selectedDay: string;
  onDaySelect: (day: string) => void;
  className: string;
}

// New component for date option button
const DateOption: React.FC<{
  day: string;
  selectedDay: string;
  onSelect: (day: string) => void;
}> = ({ day, selectedDay, onSelect }) => (
  <button
    onClick={() => onSelect(day)}
    className={`block w-full h-[30px] text-center px-4 hover:bg-gray-100 whitespace-nowrap border  ${
      selectedDay === day ? "" : "text-gray-500"
    }`}
  >
    {day}
  </button>
);

const DateSelector: React.FC<DateSelectorProps> = ({
  selectedDay,
  onDaySelect,
}) => {
  const [isSelectVisible, setIsSelectVisible] = useState(false);

  const toggleSelect = () => {
    setIsSelectVisible(!isSelectVisible);
  };

  const handleSelect = (day: string) => {
    onDaySelect(day);
    toggleSelect();
  };

  return (
    <div className="py-2  flex items-start inline-block">
      {/* 날짜 선택 버튼 */}
      <button
        onClick={toggleSelect}
        className="flex justify-between items-center bg-white text-gray-700 px-2 rounded leading-tight focus:outline-none focus:bg-white"
      >
        <span>{selectedDay}</span>
        <svg
          className="w-4 h-4 ml-2 flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {/* 날짜 선택 메뉴 */}
      {isSelectVisible && (
        <div className="bg-white border-gray-200 rounded">
          <DateOption
            day="오늘"
            selectedDay={selectedDay}
            onSelect={handleSelect}
          />
          <DateOption
            day="지난 내역"
            selectedDay={selectedDay}
            onSelect={handleSelect}
          />
        </div>
      )}
    </div>
  );
};

export default DateSelector;
