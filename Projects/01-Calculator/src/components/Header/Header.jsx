import { ThemeSelector } from "../ThemeSelector/ThemeSelector";

export const Header = () => {
  return (
    <div>
      <header className="flex justify-between">
        <h1>calc</h1>
        <ThemeSelector />
      </header>
    </div>
  );
};
