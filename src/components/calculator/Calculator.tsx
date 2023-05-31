import React, { useState } from 'react';
import NumButtonGroup from './NumButtonGroup';
import '../../style/calculator.css';
import DisplayPanel from './DisplayPanel';

export default function Calculator() {
  const [expression, setExpression] = useState<string>('');

  const handleClick = (str: string) => {
    const newExpression = expression + str;
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
