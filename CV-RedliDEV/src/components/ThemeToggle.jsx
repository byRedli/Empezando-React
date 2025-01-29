import React, { useState } from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="theme-toggle">
      <ion-icon name="moon-outline"></ion-icon>
      <label className="switch">
        <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
      <ion-icon name="sunny-outline"></ion-icon>
    </div>
  );
}


export default ThemeToggle;