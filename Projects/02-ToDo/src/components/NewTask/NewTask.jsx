import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./NewTask.css";

export const NewTask = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`new-task ${theme} py-4 px-6 rounded-md`}>
      <p>Create a new todo...</p>
    </div>
  );
};
