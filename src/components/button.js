// eslint-disable-next-line
import React from "react";
import PropTypes from 'prop-types';

class Button extends React.PureComponent {
  render() {
    const { buttonClick } = this.props;
    return (
      <div className="container">
        <div className="btns">
          <div className="row">
            <button type="button" className="btn" onClick={() => buttonClick('(')}>
              (
            </button>
            <button type="button" className="btn" onClick={() => buttonClick(')')}>
              )
            </button>
            <button type="button" className="btn" onClick={() => buttonClick('%')}>
              %
            </button>
            <button type="button" id="ac" onClick={() => buttonClick('AC')}>
              AC
            </button>
          </div>

          <div className="row">
            <button type="button" className="btn" onClick={() => buttonClick('7')}>
              7
            </button>
            <button type="button" className="btn" onClick={() => buttonClick('8')}>
              8
            </button>
            <button type="button" className="btn" onClick={() => buttonClick('9')}>
              9
            </button>
            <button type="button" className="btn" onClick={() => buttonClick('÷')}>
              ÷
            </button>
          </div>

          <div className="row">
            <button type="button" className="btn" onClick={() => buttonClick('4')}>
              4
            </button>
            <button type="button" className="btn" onClick={() => buttonClick('5')}>
              5
            </button>
            <button type="button" className="btn" onClick={() => buttonClick('6')}>
              6
            </button>
            <button type="button" className="btn" onClick={() => buttonClick('x')}>
              ×
            </button>
          </div>

          <div className="row">
            <button type="button" className="btn" onClick={() => buttonClick('1')}>
              1
            </button>
            <button type="button" className="btn" onClick={() => buttonClick('2')}>
              2
            </button>
            <button type="button" className="btn" onClick={() => buttonClick('3')}>
              3
            </button>
            <button type="button" className="btn" onClick={() => buttonClick('-')}>
              -
            </button>
          </div>

          <div className="row">
            <button type="button" className="btn" onClick={() => buttonClick('0')}>
              0
            </button>
            <button type="button" className="btn" onClick={() => buttonClick('.')}>
              .
            </button>
            <button type="button" id="eval" onClick={() => buttonClick('=')}>
              =
            </button>
            <button type="button" className="btn" onClick={() => buttonClick('+')}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Button.propTypes = {
  buttonClick: PropTypes.func.isRequired,
};

export default Button;
