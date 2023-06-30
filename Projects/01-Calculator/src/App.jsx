import { ThemeContextProvider } from "./contexts/ThemeContext";
import "./App.css";
import { Calculator } from "./components/Calculator/Calculator";

function App() {
  return (
    <div className="App grid place-items-center max-w-full min-h-screen">
      <ThemeContextProvider>
        <Calculator />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
