// eslint-disable-next-line
import React from "react";
import "../App.css";
class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="display">
          <input id="screen" type="text" placeholder="0" />
        </div>

        <div className="btns">
          <div className="row">
            <button id="ce">CE</button>
            <button>x!</button>
            <button className="btn">(</button>
            <button className="btn">)</button>
            <button className="btn">%</button>
            <button id="ac">AC</button>
          </div>

          <div className="row">
            <button>sin</button>
            <button>π</button>
            <button className="btn">7</button>
            <button className="btn">8</button>
            <button className="btn">9</button>
            <button className="btn">÷</button>
          </div>

          <div className="row">
            <button>cos</button>
            <button>log</button>
            <button className="btn">4</button>
            <button className="btn">5</button>
            <button className="btn">6</button>
            <button className="btn">×</button>
          </div>

          <div className="row">
            <button>tan</button>
            <button>√</button>
            <button className="btn">1</button>
            <button className="btn">2</button>
            <button className="btn">3</button>
            <button className="btn">-</button>
          </div>

          <div className="row">
            <button>e</button>
            <button>x 
              <span
               style={{position: "relative", bottom: ".4em", right: ".1em"}}>y</span>
            </button>
            <button className="btn">0</button>
            <button className="btn">.</button>
            <button id="eval">=</button>
            <button className="btn">+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
