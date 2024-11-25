import React from "react";
import { ThemeContext } from "./ThemeContext.context";
import { PropsWithChildren } from "react";
import { useNavigate, useLocation } from "react-router";

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const back = () => navigate("/");
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {location.pathname !== "/" && <button onClick={back}>Back</button>}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          textAlign: "center",
          backgroundColor:
            theme === "light" ? "#bfe2fd" : "hsl(228, 100%, 84%)",
          color: theme === "light" ? "#000" : "#fff",
          transition: "background-color 0.3s ease",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
