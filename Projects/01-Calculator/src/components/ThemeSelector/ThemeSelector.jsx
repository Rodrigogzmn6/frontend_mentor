import { Radio } from "@mui/material";
import { ThemeContext } from "../../contexts/ThemeContext";

import "./ThemeSelector.css";
import { useContext } from "react";

export const ThemeSelector = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const handleClick = (event) => {
    changeTheme(event.target.value);
  };

  return (
    <div className="flex items-center gap-6">
      <h3 className="text-base">THEME</h3>
      <div className="themeSelectorRadioGroup bg-d-screen-bg rounded-full px-2">
        <Radio
          sx={{
            color: "hsl(224 36% 15%)",
            "&.Mui-checked": {
              color: "hsl(6 63% 50%)",
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
            color: "hsl(224 36% 15%)",
            "&.Mui-checked": {
              color: "hsl(6 63% 50%)",
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
            color: "hsl(224 36% 15%)",
            "&.Mui-checked": {
              color: "hsl(6 63% 50%)",
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
