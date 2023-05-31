import React, { MouseEventHandler } from 'react';
import './Calculator.css';

export default function NumButtonGroup({
  onClick,
}: {
  onClick: MouseEventHandler;
}) {
  return (
    <div id="numButtonGroup" className="calculatorBtnGroup">
      <div id="numRow1" className="numRow">
        <button id="btn7" onClick={onClick}>
          7
        </button>
        <button id="btn8" onClick={onClick}>
          8
        </button>
        <button id="btn9" onClick={onClick}>
          9
        </button>
        <button id="btn/" onClick={onClick}>
          /
        </button>
      </div>
      <div id="numRow2" className="numRow">
        <button id="btn4" onClick={onClick}>
          4
        </button>
        <button id="btn5" onClick={onClick}>
          5
        </button>
        <button id="btn6" onClick={onClick}>
          6
        </button>
        <button id="btnx" onClick={onClick}>
          x
        </button>
      </div>
      <div id="numRow3" className="numRow">
        <button id="btn1" onClick={onClick}>
          1
        </button>
        <button id="btn2" onClick={onClick}>
          2
        </button>
        <button id="btn3" onClick={onClick}>
          3
        </button>
        <button id="btn-" onClick={onClick}>
          -
        </button>
      </div>
      <div id="numRow4" className="numRow">
        <button id="btn." onClick={onClick}>
          .
        </button>
        <button id="btn0" onClick={onClick}>
          0
        </button>
        <button id="btn=" onClick={onClick}>
          =
        </button>
        <button id="btn+" onClick={onClick}>
          +
        </button>
      </div>
    </div>
  );
}
