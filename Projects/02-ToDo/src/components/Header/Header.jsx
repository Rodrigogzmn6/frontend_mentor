import { useContext } from "react";
import MoonIcon from "../../assets/icon-moon.svg";
import SunIcon from "../../assets/icon-sun.svg";
import { ThemeContext } from "../../contexts/ThemeContext";

export const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const handleOnClick = () => {
    changeTheme();
  };
  return (
    <div className="header flex justify-between items-center text-title">
      <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">T O D O</h1>
      <img
        src={theme === "dark" ? SunIcon : MoonIcon}
        onClick={handleOnClick}
      />
    </div>
  );
};
