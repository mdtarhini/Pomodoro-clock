import React from "react";

import PlusMinusButtons from "./PlusMinusButtons";

const Settings = (props) => {
  return (
    <div>
      <PlusMinusButtons
        label="Session Length (minutes)"
        labelID="session-label"
        plusID="session-decrement"
        minusID="session-increment"
        valueID="session-length"
        value={props.sessionLength}
        onValueChange={props.setSessionLength}
        onPlus={() => props.setSessionLength(props.sessionLength + 1)}
        onMinus={() => props.setSessionLength(props.sessionLength - 1)}
      />
      <br />
      <PlusMinusButtons
        label="Break Length (minutes)"
        labelID="break-label"
        plusID="break-decrement"
        minusID="break-increment"
        valueID="break-length"
        value={props.breakLength}
        onPlus={() => props.setBreakLength(props.breakLength + 1)}
        onMinus={() => props.setBreakLength(props.breakLength - 1)}
      />
    </div>
  );
};

export default Settings;
