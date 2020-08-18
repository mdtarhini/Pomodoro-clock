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
          <a href="" target="_blank">
            developed
          </a>{" "}
          by Tarhini Mohamad
        </i>
      </div>
    </div>
  );
};
export default App;
