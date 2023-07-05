import "./styles/themeConstants.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { Application } from "./pages/Application/Application";
import { Home } from "./pages/Home/Home";
import { Registration } from "./pages/Registration/Registration";
import { Login } from "./pages/Login/Login";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App flex flex-col font-josefin max-w-full min-h-screen w-screen">
      <ThemeContextProvider>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/todo" element={<Application />} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
