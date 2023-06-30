import { useContext, useEffect, useState } from "react";
import { ThemeSelector } from "../ThemeSelector/ThemeSelector";
import "./Header.css";
import { ThemeContext } from "../../contexts/ThemeContext";

export const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <header className="header flex justify-between">
        <h1>calc</h1>
        <ThemeSelector />
      </header>
    </div>
  );
};
