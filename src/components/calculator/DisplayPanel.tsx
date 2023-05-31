import React from 'react';
import '../../style/calculator.css';

export default function DisplayPanel({ displayStr }: { displayStr: string }) {
  return (
    <div id="displayPanel" className="displayPanel">
      <p id="displayStr">{displayStr}</p>
    </div>
  );
}
