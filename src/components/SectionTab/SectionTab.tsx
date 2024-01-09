import React from "react";
import "./SectionTab.css";

interface SectionTabProps {
  title: string;
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const SectionTab = ({ title, isActive, onClick }: SectionTabProps) => {
  return (
    <button
      className={`tab-howit ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
