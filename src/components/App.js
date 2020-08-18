import React from "react";

import Pomodoro from "./Pomodoro";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Pomodoro />
      <div className="footer">
        <i>
          Designed and{" "}
          <a href="https://github.com/mtarhini/Pomodoro-clock" target="_blank">
            developed
          </a>{" "}
          by Tarhini Mohamad
        </i>
      </div>
    </div>
  );
};
export default App;
