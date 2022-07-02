import React from 'react';
import '../App.css';
import Button from './button';
import InputResult from './inputDisplay';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  onButtonClick = (e) => {
    const buttonName = e;
    const { obj } = this.state;
    this.setState({
      obj: calculate(obj, buttonName),
    });
  };

  render() {
    const { obj } = this.state;
    return (
      <div className="display">
        <InputResult displayState={obj} id="screen" />
        <Button buttonClick={this.onButtonClick} />
      </div>
    );
  }
}

export default Calculator;
