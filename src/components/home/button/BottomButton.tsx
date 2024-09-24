import React from "react";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const HomeButton: React.FC<ButtonProps> = ({
  onClick,
  className,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-[186px] h-[52px] bg-blue-500 m-5 font-semibold 
                                text-center text-[15px] leading-[15px]
                                 text-white rounded-md  ${className}`}
    >
      {children}
    </button>
  );
};

export default HomeButton;
