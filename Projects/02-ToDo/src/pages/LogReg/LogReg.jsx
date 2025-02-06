import { useContext } from "react";
import "./LogReg.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { LogRegContainer } from "../../containers/LogRegContainer";
import { useNavigate } from "react-router-dom";

export const LogReg = ({ isLogin }) => {
  const { theme } = useContext(ThemeContext);
  const navigateTo = useNavigate();

  return (
    <div
      className={`logreg ${theme} flex flex-col flex-grow justify-center items-center text-lg sm:text-xl lg:text-2xl`}
    >
      <LogRegContainer isLogin={isLogin} />
      {isLogin ? (
        <div>
          <p>
            {`Don't have an account yet?`}{" "}
            <a
              className="cursor-pointer font-bold"
              onClick={() => {
                navigateTo("/register");
              }}
            >
              Register now
            </a>
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
