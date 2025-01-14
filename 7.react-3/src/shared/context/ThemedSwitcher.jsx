import React, { useEffect } from "react";
import ThemeContext from "./ThemeContext";

const ThemedSwitcher = () => {
  const { toggleTheme, theme } = React.useContext(ThemeContext);

  //   const { theme, toggleTheme } = useContext(ThemeContext);
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    }
  }, [theme]);
  return (
    <>
      <div>
        <p>{theme}</p>
        <br />
        <button onClick={toggleTheme}>theme swicher</button>
      </div>
    </>
  );
};

export default ThemedSwitcher;

{
  /* <ThemeContext.Consumer>
{(value) => (
    <div>
        {value.thema}
        <br />
        <br />
        <button onClick={value.ToggleTheme}>switcher</button>
       
    </div>
)}
</ThemeContext.Consumer> */
}
