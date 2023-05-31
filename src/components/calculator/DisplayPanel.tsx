import React from 'react';
import './Calculator.css';

export default function DisplayPanel({ displayStr }: { displayStr: string }) {
  return (
    <div id="displayPanel" className="displayPanel">
      <p id="displayStr">{displayStr}</p>
    </div>
  );
}
