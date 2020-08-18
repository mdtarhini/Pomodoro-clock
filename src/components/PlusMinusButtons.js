import React from "react";

const PlusMinusButtons = (props) => {
  return (
    <div>
      <div className="">
        <h6 className="text-white" id={props.labelID}>
          {props.label}
        </h6>
      </div>
      <div className="">
        <div className="btn-group mr-auto" role="group">
          <button
            type="button"
            className="btn btn-secondary rounded-0"
            id={props.minusID}
            onClick={props.onMinus}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#53806c",
              border: "1px solid tomato",
            }}
          >
            <i className="fas fa-minus"></i>
          </button>
          <div
            id={props.valueID}
            className="d-flex"
            style={{
              width: "50px",
              height: "50px",
              borderTop: "1px solid tomato",
              borderBottom: "1px solid tomato",
            }}
          >
            <p className="m-auto text-white">{props.value}</p>
          </div>
          <button
            type="button"
            className="btn btn-secondary rounded-0"
            id={props.plusID}
            onClick={props.onPlus}
            style={{
              width: "50px",
              height: "50px",
              border: "1px solid tomato",
              backgroundColor: "#173327",
            }}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default PlusMinusButtons;
