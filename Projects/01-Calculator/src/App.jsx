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
    <div className="App grid place-items-center w-screen max-w-full min-h-screen">
      <ThemeContextProvider>
        <div className="flex flex-col font-league gap-4 py-4 px-8 sm:w-2/3 md:w-1/2 lg:w-1/3">
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
