import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TasksContext = React.createContext([]);

function TasksContextProvider({ children }) {
  const navigateTo = useNavigate();
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const fetchTasks = async () => {
    try {
      // console.log(user._id);
      const response = await axios.get("api/", {
        params: {
          userId: user._id,
        },
        headers: {
          authorization: `${token}`,
        },
      });
      setTasks(response.data);
    } catch (error) {
      if (error.response.status === 401) {
        navigateTo("/login");
      } else {
        console.log(error);
      }
    }
  };

  const createTask = async () => {
    const task = {
      completed: false,
      description: "task de prueba",
    };
    try {
      await axios.post("api/tasks", {
        task: task,
        userId: user._id,
        headers: {
          authorization: `${token}`,
        },
      });
      fetchTasks();
    } catch (error) {
      if (error.response.status === 401) {
        navigateTo("/login");
      } else {
        console.log(error);
      }
    }
  };

  const deleteTask = async () => {
    const task = {
      completed: false,
      description: "task de prueba",
    };
    try {
      await axios.post("api/tasks", {
        task: task,
        userId: user._id,
        headers: {
          authorization: `${token}`,
        },
      });
      fetchTasks();
    } catch (error) {
      if (error.response.status === 401) {
        navigateTo("/login");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        fetchTasks,
        createTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export { TasksContext, TasksContextProvider };
