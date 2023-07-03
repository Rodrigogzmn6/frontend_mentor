import { useContext } from "react";
import CrossIcon from "../../assets/icon-cross.svg";
import { ThemeContext } from "../../contexts/ThemeContext";
import CheckIcon from "../../assets/icon-check.svg";
import "./Task.css";

export const Task = ({ task }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`task ${theme} border-b flex items-center justify-between py-4 px-6 ${
        task.checked ? "checked" : ""
      }`}
    >
      <div className="flex gap-4 items-center">
        <div
          className={`cb border grid place-items-center h-6 rounded-full shrink-0 w-6 ${
            task.checked ? "checked" : ""
          }`}
        >
          {task.checked ? <img src={CheckIcon} /> : <div></div>}
        </div>
        <p>{task.text}</p>
      </div>
      <img src={CrossIcon} />
    </div>
  );
};
