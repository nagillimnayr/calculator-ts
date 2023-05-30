import React from 'react';
import NumButtonGroup from './NumButtonGroup';
export default function Calculator() {
  return (
    <div id="calculator">
      <div id="displayPanel"></div>
      <div id="buttonPanel">
        <NumButtonGroup />
        <div id="operatorBtns"></div>
      </div>
    </div>
  );
}
