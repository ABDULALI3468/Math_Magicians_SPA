// eslint-disable-next-line
import { useState } from "react";
import calculate from "./logic/calculate";
import React from "react";
import "../App.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: "",
      next: "",
      operation: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const buttonName = e.target.name;
    this.setState((prevState) => ({
      ...calculate(prevState, buttonName),
    }));
  };

  render() {
    return (
      <div className="container">
        <div className="display">
          <input id="screen" type="text" placeholder="0" />
        </div>

        <div className="btns">
          <div className="row">
            <button type="button" className="btn">
              (
            </button>
            <button type="button" className="btn">
              )
            </button>
            <button type="button" className="btn">
              %
            </button>
            <button type="button" id="ac">
              AC
            </button>
          </div>

          <div className="row">
            <button type="button" className="btn">
              7
            </button>
            <button type="button" className="btn">
              8
            </button>
            <button type="button" className="btn">
              9
            </button>
            <button type="button" className="btn">
              ÷
            </button>
          </div>

          <div className="row">
            <button type="button" className="btn">
              4
            </button>
            <button type="button" className="btn">
              5
            </button>
            <button type="button" className="btn">
              6
            </button>
            <button type="button" className="btn">
              ×
            </button>
          </div>

          <div className="row">
            <button type="button" className="btn">
              1
            </button>
            <button type="button" className="btn">
              2
            </button>
            <button type="button" className="btn">
              3
            </button>
            <button type="button" className="btn">
              -
            </button>
          </div>

          <div className="row">
            <button type="button" className="btn">
              0
            </button>
            <button type="button" className="btn">
              .
            </button>
            <button type="button" id="eval">
              =
            </button>
            <button type="button" className="btn">
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
