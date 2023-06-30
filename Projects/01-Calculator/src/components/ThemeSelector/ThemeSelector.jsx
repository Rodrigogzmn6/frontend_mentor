import { Radio } from "@mui/material";
import { ThemeContext } from "../../contexts/ThemeContext";

import "./ThemeSelector.css";
import { useContext, useEffect, useState } from "react";

export const ThemeSelector = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [{ cbColor, checkedColor }, setColors] = useState({
    cbColor: "hsl(223 31% 20%)",
    checkedColor: "hsl(6 63% 50%)",
  });

  const handleClick = (event) => {
    changeTheme(event.target.value);
  };

  useEffect(() => {
    if (theme === "dark") {
      setColors({
        cbColor: "hsl(223 31% 20%)",
        checkedColor: "hsl(6 63% 50%)",
      });
    } else if (theme === "light") {
      setColors({
        cbColor: "hsl(0 5% 81%)",
        checkedColor: "hsl(25 98% 40%)",
      });
    } else if (theme === "accent") {
      setColors({
        cbColor: "hsl(268 71% 12%)",
        checkedColor: "hsl(176 100% 44%)",
      });
    }
  }, [theme]);

  return (
    <div className={`theme-selector  flex items-center gap-6`}>
      <h3 className="text-base">THEME</h3>
      <div className={`radio-group ${theme} rounded-full px-2`}>
        <Radio
          sx={{
            color: cbColor,
            "&.Mui-checked": {
              color: checkedColor,
            },
            margin: "0px",
            padding: "0px",
          }}
          checked={theme === "dark"}
          onChange={handleClick}
          value={"dark"}
        />
        <Radio
          sx={{
            color: cbColor,
            "&.Mui-checked": {
              color: checkedColor,
            },
            margin: "0px",
            padding: "0px",
          }}
          checked={theme === "light"}
          onChange={handleClick}
          value={"light"}
        />
        <Radio
          sx={{
            color: cbColor,
            "&.Mui-checked": {
              color: checkedColor,
            },
            margin: "0px",
            padding: "0px",
          }}
          checked={theme === "accent"}
          onChange={handleClick}
          value={"accent"}
        />
      </div>
    </div>
  );
};
