import React from 'react';
import '../../style/calculator.css';
import { format } from 'mathjs';

export default function DisplayPanel({ displayStr }: { displayStr: string }) {
  return (
    <div id="displayPanel" className="displayPanel">
      <p id="displayStr">{format(displayStr)}</p>
    </div>
  );
}
