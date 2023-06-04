import React, { MouseEventHandler, useState } from 'react';
import ButtonPanel from './ButtonPanel';
import './Calculator.css';
import DisplayPanel from './DisplayPanel';

export default function Calculator() {
  const [expression, setExpression] = useState<string>('');

  // Add character to expression string on button click
  const handleClick: MouseEventHandler = (e: React.MouseEvent) => {
    const btn = e.target as HTMLButtonElement;
    const newExpression = expression + btn.name;
    setExpression(newExpression);
  };

  return (
    <div id="calculator">
      <DisplayPanel displayStr={expression} />
      <div id="buttonPanel">
        <ButtonPanel onClick={handleClick} />
      </div>
    </div>
  );
}
