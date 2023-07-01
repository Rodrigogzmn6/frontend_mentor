import { useContext, useState } from "react";
import "./KeyButton.css";
import { ThemeContext } from "../../contexts/ThemeContext";

export const KeyButton = ({ value, keyType, handleClick }) => {
  const { theme } = useContext(ThemeContext);
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`key-button ${theme} grid cursor-pointer place-items-center rounded-md ${keyType} ${
        clicked ? "clicked" : ""
      }`}
      onClick={() => handleClick(value)}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
    >
      <p>{value}</p>
    </div>
  );
};
