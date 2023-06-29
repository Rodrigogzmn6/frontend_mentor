import "./styles/themeConstants.css";
import { Header } from "./components/Header/Header";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import "./App.css";
import { useContext, useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { CalculatorContainer } from "./containers/CalculatorContainer";

function App() {
  const { theme } = useContext(ThemeContext);
  const [themeClass, setThemeClass] = useState();

  return (
    <div className="App">
      <ThemeContextProvider>
        <div
          className={`flex flex-col font-league gap-4 h-screen py-4 px-8 w-screen`}
        >
          <Header />
          <div>
            <CalculatorContainer />
          </div>
        </div>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
