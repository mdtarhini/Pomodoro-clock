import React from "react";
import "./App.css";

class Timer extends React.Component {
  //Helper functions
  timeFormatter = (timeInSeconds) => {
    let mins = Math.floor(timeInSeconds / 60);
    let secs = timeInSeconds - 60 * mins;
    return (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;
  };
  //   This is just for now, find a clever way...

  makeAGrid() {
    let colIndexDictionary = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      5: 4,
      7: 5,
      11: 6,
      10: 7,
      9: 8,
      8: 9,
      6: 10,
      4: 11,
    };
    let arrayOfRows = [];
    let counter = 0;
    for (let iRow = 0; iRow < 4; iRow++) {
      let arrayOfCols = [];
      let nCols = iRow % 3 == 0 ? 4 : 2;
      for (let iCol = 0; iCol < nCols; iCol++) {
        let isItDark =
          (12 * (60 * this.props.totalTime - this.props.elapsedTime)) /
            (60 * this.props.totalTime) >=
          colIndexDictionary[counter] + 1
            ? true
            : false;
        if (!this.props.isThisASession) isItDark = !isItDark;
        arrayOfCols.push(
          <div
            key={iCol + 3 * iRow}
            className={`col-3 progressSquare ${
              isItDark ? "progressSquareDark" : "progressSquareLight"
            }`}
          >
            {/* {colIndexDictionary[counter]} */}
          </div>
        );
        counter++;
      }

      arrayOfRows.push(
        <div key={iRow} className="row justify-content-between m-auto">
          {arrayOfCols}
        </div>
      );
    }

    return arrayOfRows;
  }
  render() {
    return (
      <React.Fragment>
        <div id="progressSquares">{this.makeAGrid()}</div>

        <div id="timerInfo" className="text-center text-white">
          <button
            className={`btn m-0 rounded-0 ${
              this.props.isThisASession
                ? "progressSquareLight"
                : "progressSquareDark"
            }`}
            id="start_stop"
            onClick={this.props.onBtnClick}
          >
            <p className="m-0" id="timer-label">
              {this.props.label}
            </p>
            <i id="btnIcn" className={this.props.btnIcn}></i>
            <p className="m-0" id="time-left">
              {this.timeFormatter(this.props.elapsedTime)}
            </p>
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default Timer;
