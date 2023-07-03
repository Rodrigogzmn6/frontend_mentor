import { useContext } from "react";
import { NewTask } from "../components/NewTask/NewTask";
import { TasksList } from "../components/TasksList/TasksList";
import { ThemeContext } from "../contexts/ThemeContext";
import { TasksFilter } from "../components/TasksFilter/TasksFilter";

export const TodoContainer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="grid gap-4">
      <NewTask />
      <TasksList />
      <TasksFilter />
    </div>
  );
};
