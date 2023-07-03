import "./styles/themeConstants.css";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { Application } from "./components/Application/Application";

function App() {
  return (
    <div className="App font-josefin max-w-full min-h-screen w-screen">
      <ThemeContextProvider>
        <Application />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
