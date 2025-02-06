import { useContext } from "react";
import "./TasksList.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Task } from "../Task/Task";
import { TasksSummary } from "../TasksSummary/TasksSummary";
import { TasksContext } from "../../contexts/TasksContext";
export const TasksList = () => {
  const { theme } = useContext(ThemeContext);
  const { tasks } = useContext(TasksContext);
  return tasks.length === 0 ? (
    <div></div>
  ) : (
    <div
      className={`task-list ${theme} rounded-md shadow-[0_10px_15px_-3px_rgba(77,80,102,0.3)]`}
    >
      {tasks.map((task) => (
        <Task key={task._id} task={task} />
      ))}
      <TasksSummary />
    </div>
  );
};
