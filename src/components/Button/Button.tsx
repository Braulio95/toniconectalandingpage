import React from "react";
import "./Button.css";

type ButtonProps = {
    text: string;
    color: string;
    textColor: string;
};

export const Button = ({ text, color, textColor }: ButtonProps) => {
    return (
        <button
            style={{
                backgroundColor: color,
                color: textColor,
            }}
        >
            {text}
        </button>
    );
};
