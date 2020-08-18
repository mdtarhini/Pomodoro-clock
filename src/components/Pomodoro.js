import React from "react";
import PlusMinusButtons from "./PlusMinusButtons";
import Timer from "./Timer";
import "./App.css";

class Pomodoro extends React.Component {
  //---------------------------------------------------------------------------------//
  //State
  state = {};
  //---------------------------------------------------------------------------------//

  //---------------------------------------------------------------------------------//
  //Helper functions
  clearTimes = () => {
    clearInterval(this.state.intervalID);
  };
  setLengths = (property, value) => {
    this.clearTimes();
    if (
      this.state[property] + value > 0 &&
      this.state[property] + value <= 60
    ) {
      this.setState({
        [`${property}`]: this.state[property] + value,
        elapsedTime:
          this.state.isThisASession && property === "sessionLength"
            ? 60 * (this.state.sessionLength + value)
            : !this.state.isThisASession && property === "breakLength"
            ? 60 * (this.state.breakLength + value)
            : this.state.elapsedTime,
        timerIsRunning: false,
      });
    }
  };
  resetFactory = () => {
    this.clearTimes();
    this.setState({
      elapsedTime: 1500,
      isThisASession: true,
      sessionLength: 25,
      breakLength: 5,
      intervalID: 0,
      timerIsRunning: false,
    });
    if (this.audio.current) {
      this.audio.current.pause();
      this.audio.current.currentTime = 0;
    }
  };
  PalyBeep = () => {
    this.audio.current.play();
  };
  //---------------------------------------------------------------------------------//

  //---------------------------------------------------------------------------------//
  //Lifecycle methods
  componentDidMount = () => {
    this.audio = React.createRef();
    this.resetFactory();
  };

  componentWillUnmount = () => {
    this.clearTimes();
  };
  //---------------------------------------------------------------------------------//

  onStartPauseClick = () => {
    this.clearTimes();
    if (this.state.timerIsRunning) {
      this.setState({ timerIsRunning: false });
    } else {
      this.setState({ timerIsRunning: true });
      this.startTimer();
    }
  };

  startTimer = () => {
    this.clearTimes();
    this.setState({
      intervalID: setInterval(() => {
        this.setState({ elapsedTime: this.state.elapsedTime - 1 });
        if (this.state.elapsedTime === -1) {
          this.PalyBeep();
          this.setState({
            elapsedTime: this.state.isThisASession
              ? 60 * this.state.breakLength
              : 60 * this.state.sessionLength,
            isThisASession: !this.state.isThisASession,
          });
          this.startTimer();
        }
      }, 1000),
    });
  };

  render() {
    return (
      <div className="container-fluid" id="mainContainer">
        <audio
          ref={this.audio}
          src={"http://soundbible.com/grab.php?id=529&type=wav"}
          id={"beep"}
        ></audio>

        <Timer
          elapsedTime={this.state.elapsedTime}
          isThisASession={this.state.isThisASession}
          totalTime={
            this.state.isThisASession
              ? this.state.sessionLength
              : this.state.breakLength
          }
          label={this.state.isThisASession ? "Session" : "Break"}
          onBtnClick={this.onStartPauseClick}
          btnIcn={`fas fa-${this.state.timerIsRunning ? "pause" : "play"}`}
        />

        <div className="container-fluid text-center py-3" id="settings">
          <div className="row align-items-end">
            <div className="col-5">
              <PlusMinusButtons
                label="Session Length (minutes)"
                labelID="session-label"
                plusID="session-increment"
                minusID="session-decrement"
                valueID="session-length"
                value={this.state.sessionLength}
                onPlus={() => this.setLengths("sessionLength", 1)}
                onMinus={() => this.setLengths("sessionLength", -1)}
              />
            </div>
            <div className="col-2 d-flex flex-column align-items-center">
              <p className="mb-2 text-white" id="settingCollapse">
                Reset
              </p>
              <button
                type="button"
                id="reset"
                className="btn btn-secondary rounded-0"
                onClick={this.resetFactory}
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#53806c",
                  border: "1px solid tomato",
                }}
              >
                <i className="fas fa-sync-alt"></i>
              </button>
            </div>
            <div className="col-5">
              <PlusMinusButtons
                label="Break Length (minutes)"
                labelID="break-label"
                plusID="break-increment"
                minusID="break-decrement"
                valueID="break-length"
                value={this.state.breakLength}
                onPlus={() => this.setLengths("breakLength", 1)}
                onMinus={() => this.setLengths("breakLength", -1)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pomodoro;
