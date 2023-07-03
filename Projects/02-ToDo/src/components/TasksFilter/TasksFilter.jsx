import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./TasksFilter.css";

export const TasksFilter = () => {
  const { theme } = useContext(ThemeContext);
  const [filter, setFilter] = useState("all");

  const handleOnFilterClick = (filter) => {
    setFilter(filter);
  };

  return (
    <div
      className={`task-filter ${theme} flex gap-4 py-4 px-6 rounded-md justify-center shadow-[0_10px_15px_-3px_rgba(77,80,102,0.3)]`}
    >
      <button
        className={`filter ${filter === "all" ? "active" : "inactive"}`}
        onClick={() => {
          handleOnFilterClick("all");
        }}
      >
        All
      </button>
      <button
        className={`filter ${filter === "active" ? "active" : "inactive"}`}
        onClick={() => {
          handleOnFilterClick("active");
        }}
      >
        Active
      </button>
      <button
        className={`filter ${filter === "completed" ? "active" : "inactive"}`}
        onClick={() => {
          handleOnFilterClick("completed");
        }}
      >
        Completed
      </button>
    </div>
  );
};
