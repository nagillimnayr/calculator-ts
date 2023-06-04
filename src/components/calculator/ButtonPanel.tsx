import React, { MouseEventHandler } from 'react';
import './Calculator.css';
import CalculatorButton from './CalculatorButton';

import AddIcon from '@mui/icons-material/Add'; /* + */
import RemoveIcon from '@mui/icons-material/Remove'; /* - */
import FunctionsIcon from '@mui/icons-material/Functions'; /* Sigma */
import IsoIcon from '@mui/icons-material/Iso'; /* +/- */
import PercentIcon from '@mui/icons-material/Percent'; /* % */
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'; /* ! */
import { SvgIcon, Grid, Button, ButtonGroup } from '@mui/material';
import {
  Calculator,
  CalculatorVariant,
  ChartBellCurve,
  ChartBellCurveCumulative,
  Close,
  CloseBox,
  CodeParentheses,
  CodeParenthesesBox,
  Division,
  DivisionBox,
  Equal,
  EqualBox,
  Exclamation,
  Exponent,
  ExponentBox,
  FormatSuperscript,
  Function,
  FunctionVariant,
  Infinity,
  MathCos,
  MathIntegral,
  MathIntegralBox,
  MathLog,
  MathSin,
  MathTan,
  Minus,
  MinusBox,
  Multiplication,
  MultiplicationBox,
  Percent,
  PercentBox,
  Plus,
  PlusBox,
  PlusMinus,
  PlusMinusBox,
  PlusMinusVariant,
  Pi,
  PiBox,
  Sigma,
  SlashForward,
  SlashForwardBox,
  SquareRoot,
  SquareRootBox,
  Variable,
  VariableBox,
  Numeric,
  Numeric0,
  Numeric0Box,
  Numeric1,
  Numeric1Box,
  Numeric2,
  Numeric2Box,
  Numeric3,
  Numeric3Box,
  Numeric4,
  Numeric4Box,
  Numeric5,
  Numeric5Box,
  Numeric6,
  Numeric6Box,
  Numeric7,
  Numeric7Box,
  Numeric8,
  Numeric8Box,
  Numeric9,
  Numeric9Box,
} from 'mdi-material-ui';

export default function ButtonPanel({
  onClick,
}: {
  onClick: React.MouseEventHandler;
}) {
  return (
    <div id="numButtonGroup" className="calculatorBtnGroup">
      <div id="numRow1" className="numRow">
        <CalculatorButton onClick={onClick} char="7" />
        <CalculatorButton onClick={onClick} char="8" />
        <CalculatorButton onClick={onClick} char="9" />
        <CalculatorButton onClick={onClick} char="/" />
      </div>
      <div id="numRow2" className="numRow">
        <CalculatorButton onClick={onClick} char="4" />
        <CalculatorButton onClick={onClick} char="5" />
        <CalculatorButton onClick={onClick} char="6" />
        <CalculatorButton onClick={onClick} char="*" />
      </div>
      <div id="numRow3" className="numRow">
        <CalculatorButton onClick={onClick} char="1" />
        <CalculatorButton onClick={onClick} char="2" />
        <CalculatorButton onClick={onClick} char="3" />
        <CalculatorButton onClick={onClick} char="-" />
      </div>
      <div id="numRow4" className="numRow">
        <CalculatorButton onClick={onClick} char="." />
        <CalculatorButton onClick={onClick} char="0" />
        <CalculatorButton onClick={onClick} char="=" />
        <CalculatorButton onClick={onClick} char="+" />
      </div>
    </div>
  );
}
