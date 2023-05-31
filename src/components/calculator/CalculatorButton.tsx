import React from 'react';
import './Calculator.css';
import 'katex/dist/katex.css';
import katex from 'katex';

export default function CalculatorButton({
  char,
  onClick,
}: {
  char: string;
  onClick: React.MouseEventHandler;
}) {
  return (
    <button className="calculatorButton" onClick={onClick} name={char}>
      <span className="math math-inline">{char}</span>
    </button>
  );
}
