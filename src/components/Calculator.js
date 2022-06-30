// eslint-disable-next-line
import React from "react";
import '../App.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="display">
          <input id="screen" type="text" placeholder="0" />
        </div>

        <div className="btns">
          <div className="row">
            <button type="button" id="ce">
              CE
            </button>
            <button type="button">x!</button>
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
            <button type="button">sin</button>
            <button type="button">π</button>
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
            <button type="button">cos</button>
            <button type="button">log</button>
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
            <button type="button">tan</button>
            <button type="button">√</button>
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
            <button type="button">e</button>
            <button type="button">
              x
              <span style={{ position: 'relative', bottom: '.4em', right: '.1em' }}>y</span>
            </button>
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
