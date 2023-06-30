import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./CalcScreen.css";

export const CalcScreen = ({ screen }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`calc-screen ${theme} bg-d-screen-bg p-6 text-right rounded-xl`}
    >
      <h2>{screen ? screen.substring(0, 15) : 0}</h2>
    </div>
  );
};
