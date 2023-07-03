import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Footer.css";

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`footer ${theme} text-center`}>
      <p>Drag and drop to reorder list</p>
    </div>
  );
};
