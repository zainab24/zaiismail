import React, {useState, useEffect} from 'react';
import '../styles/dark-theme.css';
import '../styles/light-theme.css';

export const DarkModeToggle = () => {
  const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);
  useEffect(() => {
    document
    .getElementsByTagName("HTML")[0]
    .setAttribute("data-theme", localStorage.getItem("theme"));
  },[]);

  const toggleThemeChange = () => {;
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setChecked(false);
    }
  }

  return (
      <>
      <input type="checkbox" id="theme-toggle" defaultChecked={!checked}
        onChange={() => toggleThemeChange()} />
      <label for="theme-toggle"></label>
      </>
  )
}
