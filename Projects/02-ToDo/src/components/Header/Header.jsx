import { useContext } from "react";
import MoonIcon from "../../assets/icon-moon.svg";
import SunIcon from "../../assets/icon-sun.svg";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Header.css";

export const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const handleOnClick = () => {
    changeTheme();
  };
  return (
    <div className={`header ${theme} flex justify-center px-12 py-8`}>
      <div className="flex flex-grow items-center justify-between sm:flex-grow-0 sm:w-2/3 lg:w-1/2">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">T O D O</h1>
        <img
          src={theme === "dark" ? SunIcon : MoonIcon}
          onClick={handleOnClick}
        />
      </div>
    </div>
  );
};
