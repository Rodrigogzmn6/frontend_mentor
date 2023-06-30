import { useContext } from "react";
import "./KeyButton.css";
import { ThemeContext } from "../../contexts/ThemeContext";

export const KeyButton = ({ value, keyType, handleClick }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`key-button ${theme} grid cursor-pointer place-items-center rounded-md ${keyType}`}
      onClick={() => handleClick(value)}
    >
      <p>{value}</p>
    </div>
  );
};
