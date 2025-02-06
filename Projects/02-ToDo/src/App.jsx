import "./styles/themeConstants.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { TasksContextProvider } from "./contexts/TasksContext";
import { Application } from "./pages/Application/Application";
import { Home } from "./pages/Home/Home";
import { LogReg } from "./pages/LogReg/LogReg";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App flex flex-col font-josefin max-w-full min-h-screen w-screen">
      <ThemeContextProvider>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <TasksContextProvider>
                  <Home />
                </TasksContextProvider>
              }
            />
            <Route path="/login" element={<LogReg isLogin={true} />} />
            <Route path="/register" element={<LogReg isLogin={false} />} />
            <Route
              path="/tasks"
              element={
                <TasksContextProvider>
                  <Application />
                </TasksContextProvider>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
