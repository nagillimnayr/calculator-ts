import React, { MouseEventHandler } from 'react';
import './Calculator.css';
import CalculatorButton from './CalculatorButton';

import AddIcon from '@mui/icons-material/Add'; /* + */
import RemoveIcon from '@mui/icons-material/Remove'; /* - */
import FunctionsIcon from '@mui/icons-material/Functions'; /* Sigma */
import IsoIcon from '@mui/icons-material/Iso'; /* +/- */
import PercentIcon from '@mui/icons-material/Percent'; /* % */
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'; /* ! */
import { SvgIcon, Grid, IconButton, Button, ButtonGroup } from '@mui/material';
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
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export default function ButtonPanel({
  onClick,
}: {
  onClick: React.MouseEventHandler;
}) {
  return (
    <div id="ButtonPanel" className="calculatorBtnPanel">
      <Grid2 container columns={4}>
        <IconButton onClick={onClick} name="7" />
        <IconButton onClick={onClick} name="8" />
        <IconButton onClick={onClick} name="9" />
        <IconButton onClick={onClick} name="/" />

        <IconButton onClick={onClick} name="4" />
        <IconButton onClick={onClick} name="5" />
        <IconButton onClick={onClick} name="6" />
        <IconButton onClick={onClick} name="*" />

        <IconButton onClick={onClick} name="1" />
        <IconButton onClick={onClick} name="2" />
        <IconButton onClick={onClick} name="3" />
        <IconButton onClick={onClick} name="-" />

        <IconButton onClick={onClick} name="." />
        <IconButton onClick={onClick} name="0" />
        <IconButton onClick={onClick} name="=" />
        <IconButton onClick={onClick} name="+" />
      </Grid2>
    </div>
  );
}
