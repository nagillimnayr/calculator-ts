import React from 'react';

export default function NumButtonGroup() {
  return (
    <div id="numButtonGroup" className="calculatorBtnGroup">
      <div id="numRow1">
        <button id="btn7">7</button>
        <button id="btn8">8</button>
        <button id="btn9">9</button>
      </div>
      <div id="numRow2">
        <button id="btn4">4</button>
        <button id="btn5">5</button>
        <button id="btn6">6</button>
      </div>
      <div id="numRow3">
        <button id="btn1">1</button>
        <button id="btn2">2</button>
        <button id="btn3">3</button>
      </div>
      <div id="numRow4">
        <button id="btn.">.</button>
        <button id="btn0">0</button>
        <button id="btn=">=</button>
      </div>
    </div>
  );
}
