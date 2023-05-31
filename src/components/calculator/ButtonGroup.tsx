import React, { MouseEventHandler } from 'react';
import './Calculator.css';
import CalculatorButton from './CalculatorButton';

export default function NumButtonGroup({
  onClick,
}: {
  onClick: React.MouseEventHandler;
}) {
  return (
    <div id="numButtonGroup" className="calculatorBtnGroup">
      <div id="numRow1" className="numRow">
        <CalculatorButton onClick={onClick} char="7" />
        <CalculatorButton onClick={onClick} char="8" />
        <CalculatorButton onClick={onClick} char="9" />
        <CalculatorButton onClick={onClick} char="/" />
      </div>
      <div id="numRow2" className="numRow">
        <CalculatorButton onClick={onClick} char="4" />
        <CalculatorButton onClick={onClick} char="5" />
        <CalculatorButton onClick={onClick} char="6" />
        <CalculatorButton onClick={onClick} char="*" />
      </div>
      <div id="numRow3" className="numRow">
        <CalculatorButton onClick={onClick} char="1" />
        <CalculatorButton onClick={onClick} char="2" />
        <CalculatorButton onClick={onClick} char="3" />
        <CalculatorButton onClick={onClick} char="-" />
      </div>
      <div id="numRow4" className="numRow">
        <CalculatorButton onClick={onClick} char="." />
        <CalculatorButton onClick={onClick} char="0" />
        <CalculatorButton onClick={onClick} char="=" />
        <CalculatorButton onClick={onClick} char="+" />
      </div>
    </div>
  );
}
