import "./Calculator.css";
import "../../styles/themeConstants.css";
import { Header } from "../Header/Header";
import { CalculatorContainer } from "../../containers/CalculatorContainer";
import { useEffect, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
export const Calculator = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {}, [theme]);

  return (
    <div
      className={`application ${theme} w-screen max-w-full min-h-screen grid place-items-center`}
    >
      <div
        className={`calculator ${theme} flex flex-col font-league gap-4 py-4 px-8 sm:w-2/3 md:w-1/2 lg:w-1/3`}
      >
        <Header />
        <CalculatorContainer />
      </div>
    </div>
  );
};
