import React from "react";
import "./SectionTab.css";

interface SectionTabProps {
  title: string;
}

export const SectionTab = ({ title }: SectionTabProps) => {
  return <button className="tab-howit">{title}</button>;
};
