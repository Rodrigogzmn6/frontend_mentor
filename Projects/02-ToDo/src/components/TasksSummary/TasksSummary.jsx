import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./TasksSummary.css";

export const TasksSummary = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`tasks-summary ${theme} flex justify-between rounded-b-md py-4 px-6`}
    >
      <p>x items left</p>
      <button
        onClick={() => {
          console.log("clear comp");
        }}
      >
        Clear completed
      </button>
    </div>
  );
};
