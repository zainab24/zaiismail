import React, {useState, useEffect} from 'react';
import '../styles/dark-theme.css';
import '../styles/light-theme.css';

export const DarkModeToggle = () => {
const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark" ? true : false);
  useEffect(() => {
    document
    .getElementsByTagName("HTML")[0]
    .setAttribute("data-theme", localStorage.getItem("theme"));

    var preference = localStorage.getItem("theme");
    if(null === preference)
    {
    preference = "light";
    }
  },[]);

  const toggleThemeChange = () => {
    if (isDark === false) {
      localStorage.setItem("theme", "dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
        setIsDark(true);
    } else {
      localStorage.setItem("theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
        setIsDark(false);
    }
  }

  return (
      <>
      <input type="checkbox" id="theme-toggle" defaultChecked={!isDark}
        onChange={() => toggleThemeChange()} />
      <label for="theme-toggle"></label>
      </>
  )
}
