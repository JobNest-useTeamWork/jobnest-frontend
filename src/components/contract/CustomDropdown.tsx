import { useState, useRef, useEffect } from "react";

interface CustomDropdownProps {
  options: string[];
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

const CustomDropdown = ({
  options,
  placeholder = "Select an option",
  value,
  onChange,
  onBlur,
}: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
      if (onBlur) onBlur(); // onBlur 이벤트 처리
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-[200px] z-[500]" ref={dropdownRef}>
      <button
        type="button"
        className="w-full p-[10px] border border-[#CCCCCC] rounded-[6px] text-left bg-white"
        onClick={toggleDropdown}
      >
        {value || placeholder}
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full mt-2 bg-white border border-[#CCCCCC] rounded-[6px] z-[300] shadow-lg">
          <ul className="max-h-[200px] overflow-auto">
            {options.map((option, index) => (
              <li
                key={index}
                className="p-[10px] cursor-pointer hover:bg-[#f0f0f0]"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
