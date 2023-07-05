import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterContainer.css";
import axios from "axios";
import { ThemeContext } from "../contexts/ThemeContext";

export const RegisterContainer = () => {
  const { theme } = useContext(ThemeContext);
  const navigateTo = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(`intentando: ${username} y ${password}`);
      const response = await axios.post("/api/register", {
        username,
        password,
      });
      console.log(response.data);
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
      className={`register-container ${theme} flex flex-col flex-grow gap-4 items-center sm:gap-8`}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-3xl">Registration</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
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
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
