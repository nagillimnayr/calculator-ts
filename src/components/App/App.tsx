import React from 'react';
import Calculator from '../calculator/Calculator';
import './App.css';
import katex from 'katex';
import 'katex/dist/katex.css';
import Latex from 'react-latex-next';

export default function App() {
  return (
    <div id="App">
      <header id="App-header">
        <h1>Calculator App</h1>
        <hr />
      </header>
      <Calculator />
    </div>
  );
}
