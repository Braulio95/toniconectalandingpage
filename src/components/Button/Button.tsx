import React from "react";
import "./Button.css";

type ButtonProps = {
  text: string;
  color: string;
  textColor: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ text, color, textColor, onClick }: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: color,
        color: textColor,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
