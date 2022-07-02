import React, { useState } from 'react';
import '../App.css';
import Button from './button';
import InputResult from './inputDisplay';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    obj: {
      total: null,
      next: null,
      operation: null,
    },
  });

  const onButtonClick = (e) => {
    const buttonName = e;
    const { obj } = state;
    setState({
      obj: calculate(obj, buttonName),
    });
  };

  const { obj } = state;
  return (
    <div className="container">
      <InputResult displayState={obj} id="screen" />
      <Button buttonClick={onButtonClick} />
    </div>
  );
};

export default Calculator;
