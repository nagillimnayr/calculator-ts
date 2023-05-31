import React, { MouseEventHandler, useState } from 'react';
import NumButtonGroup from './NumButtonGroup';
import '../../style/calculator.css';
import DisplayPanel from './DisplayPanel';

export default function Calculator() {
  const [expression, setExpression] = useState<string>('');

  const handleClick: MouseEventHandler = (e: React.MouseEvent) => {
    const btn = e.target as HTMLButtonElement;
    const newExpression = expression + btn.textContent;
    setExpression(newExpression);
  };
  return (
    <div id="calculator">
      <DisplayPanel displayStr={expression} />
      <div id="buttonPanel">
        <NumButtonGroup onClick={handleClick} />
        <div id="operatorBtns"></div>
      </div>
    </div>
  );
}
