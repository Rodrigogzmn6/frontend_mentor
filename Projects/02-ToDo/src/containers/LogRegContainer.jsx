import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LogRegContainer.css";
import axios from "axios";
import { ThemeContext } from "../contexts/ThemeContext";

export const LogRegContainer = ({ isLogin }) => {
  const { theme } = useContext(ThemeContext);
  const navigateTo = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const response = await axios.post("/api/login", {
          username,
          password,
        });
        const { accessToken, user } = response.data;

        localStorage.setItem("token", accessToken);
        localStorage.setItem("user", JSON.stringify(user));
        navigateTo("/tasks");
      } else {
        await axios.post("/api/register", {
          username,
          password,
        });
        navigateTo("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserOnChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);
  };

  const handleOnGoBack = () => {
    navigateTo("/");
  };

  return (
    <div
      className={`logreg-container ${theme} flex flex-col flex-grow gap-4 items-center sm:gap-8`}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-3xl">
        {isLogin ? "Login" : "Register"}
      </h2>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Username"
          value={username}
          onChange={handleUserOnChange}
          className="text-d-bg px-4 py-1 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordOnChange}
          className="text-d-bg px-4 py-1 rounded-md"
        />
        <div className="form-buttons flex gap-4 justify-between">
          <button
            className={`form-button ${theme} rounded-lg px-4 py-2`}
            type="button"
            onClick={handleOnGoBack}
          >
            Go back
          </button>
          <button
            className={`form-button ${theme} rounded-lg px-4 py-2`}
            type="button"
            onClick={handleOnSubmit}
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};
