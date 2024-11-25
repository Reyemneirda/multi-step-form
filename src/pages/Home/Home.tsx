import React from "react";
import Button from "../../DesignElements/Button/Button";
import { useNavigate } from "react-router";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <h1>Welcome to PageTest</h1>
      </header>
      <main>
        <div>
          <Button label="Subscribe" />
          <Button label="Task Manager" onclick={() => navigate("/tasks")} />
        </div>
      </main>
    </div>
  );
};
