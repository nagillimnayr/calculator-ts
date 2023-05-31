import React from 'react';
import NumButtonGroup from './NumButtonGroup';
import '../../style/calculator.css';
import DisplayPanel from './DisplayPanel';

export default function Calculator() {
  return (
    <div id="calculator">
      <DisplayPanel displayStr="12+5" />
      <div id="buttonPanel">
        <NumButtonGroup />
        <div id="operatorBtns"></div>
      </div>
    </div>
  );
}
