import React from "react";
import Button from "../../DesignElements/Button/Button";
export const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Welcome to PageTest</h1>
      <Button label="Subscribe" />
    </div>
  );
};
