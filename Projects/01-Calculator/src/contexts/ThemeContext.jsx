import React, { useState } from "react";

const ThemeContext = React.createContext([]);

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function changeTheme(newTheme) {
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
