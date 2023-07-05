import { useContext } from "react";
import "./Registration.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { RegisterContainer } from "../../containers/RegisterContainer";

export const Registration = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`registration ${theme} flex flex-grow justify-center text-lg sm:text-xl lg:text-2xl`}
    >
      <RegisterContainer />
    </div>
  );
};
