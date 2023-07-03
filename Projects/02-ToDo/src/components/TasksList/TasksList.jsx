import { useContext, useEffect, useState } from "react";
import "./TasksList.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Task } from "../Task/Task";
import { TasksSummary } from "../TasksSummary/TasksSummary";
export const TasksList = () => {
  const { theme } = useContext(ThemeContext);
  const [tasksList, setTaskList] = useState([
    {
      checked: false,
      text: "Hacer una cosa",
    },
    {
      checked: true,
      text: "Hacer otra cosa",
    },
    {
      checked: false,
      text: "Hacer ochooasifajosifh aoihosa trillones de mil de cosas",
    },
    {
      checked: true,
      text: "Hacer otra cosa",
    },
    {
      checked: false,
      text: "Hacer una cosa",
    },
    {
      checked: true,
      text: "Hacer otra cosa",
    },
    {
      checked: false,
      text: "Hacer una cosa",
    },
    {
      checked: true,
      text: "Hacer otra cosa",
    },
    {
      checked: false,
      text: "Hacer una cosa",
    },
    {
      checked: true,
      text: "Hacer otra cosa",
    },
    {
      checked: false,
      text: "Hacer una cosa",
    },
    {
      checked: true,
      text: "Hacer otra cosa",
    },
  ]);

  useEffect(() => {}, [tasksList]);

  return tasksList.length === 0 ? (
    <div></div>
  ) : (
    <div
      className={`task-list ${theme} rounded-md shadow-[0_10px_15px_-3px_rgba(77,80,102,0.3)]`}
    >
      {tasksList.map((task) => (
        <Task task={task} />
      ))}
      <TasksSummary />
    </div>
  );
};
