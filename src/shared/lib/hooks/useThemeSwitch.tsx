import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  React.useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} style={{ display: "none" }}>
      <FontAwesomeIcon
        icon={theme === "light" ? faMoon : faSun}
        className="text-primary"
      />
    </button>
  );
};

export default ThemeSwitcher;
