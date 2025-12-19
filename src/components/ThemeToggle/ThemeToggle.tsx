import { ThemeToggleProps } from "../../types";

const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
  return (
    <button
      className={`btn btn-sm ${theme === "light" ? "btn-dark" : "btn-light"}`}
      onClick={toggleTheme}
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ThemeToggle;
