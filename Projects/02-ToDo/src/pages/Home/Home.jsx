import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Home.css";
import { HomeContainer } from "../../containers/HomeContainer";

export const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`home ${theme} flex flex-grow justify-center text-lg sm:text-xl lg:text-2xl`}
    >
      <HomeContainer />
    </div>
  );
};
