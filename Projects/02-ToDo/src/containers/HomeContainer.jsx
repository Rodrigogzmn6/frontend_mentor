import { useContext, useEffect } from "react";
import { NewTask } from "../components/NewTask/NewTask";
import { TasksList } from "../components/TasksList/TasksList";
import { ThemeContext } from "../contexts/ThemeContext";
import { TasksFilter } from "../components/TasksFilter/TasksFilter";
import { TasksContext } from "../contexts/TasksContext";
import { Footer } from "../components/Footer/Footer";

export const HomeContainer = () => {
  const { theme } = useContext(ThemeContext);
  const { tasks, fetchTasks } = useContext(TasksContext);

  useEffect(() => {
    fetchTasks();
  }, [tasks]);

  return (
    <div className="grid gap-4">
      <NewTask />
      <TasksList />
      <TasksFilter />
      <Footer />
    </div>
  );
};
