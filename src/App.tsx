import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Home, TasksManager } from "./pages";
import { ThemeProvider } from "./ThemeProvider";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TasksManager />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
