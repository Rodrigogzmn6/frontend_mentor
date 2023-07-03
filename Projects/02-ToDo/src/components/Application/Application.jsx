import { useContext } from "react";
import { Header } from "../Header/Header";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Application.css";
import { TodoContainer } from "../../containers/TodoContainer";
import { Footer } from "../Footer/Footer";

export const Application = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`application ${theme} flex justify-center max-w-full min-h-screen text-lg w-screen sm:text-xl lg:text-2xl`}
    >
      <div className="flex flex-col py-12 px-4 gap-6 sm:w-2/3 lg:w-1/2">
        <Header />
        <TodoContainer />
        <Footer />
      </div>
    </div>
  );
};
