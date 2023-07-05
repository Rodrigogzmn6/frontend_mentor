import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "./UserContainer.css";
import { useNavigate } from "react-router-dom";

export const UserContainer = () => {
  const navigateTo = useNavigate();
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`user-container ${theme} flex flex-col gap-4 justify-center items-center sm:gap-8`}
    >
      <button
        className={`user-button ${theme} rounded-lg px-4 py-2 w-min`}
        onClick={() => {
          navigateTo("/login");
        }}
      >
        Login
      </button>
      <button
        className={`user-button ${theme} rounded-lg px-4 py-2 w-min`}
        onClick={() => {
          navigateTo("/registration");
        }}
      >
        Register
      </button>
    </div>
  );
};
