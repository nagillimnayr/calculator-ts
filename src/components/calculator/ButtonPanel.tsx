import React, { MouseEventHandler, useState } from 'react';
import './Calculator.css';
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
  CircleSmall,
  Decimal,
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
import CalculatorButton from './CalculatorButton';

export default function ButtonPanel({
  onClick,
}: {
  onClick: React.MouseEventHandler;
}) {
  const [usingBoxIcon, setUsingBoxIcon] = useState<boolean>(true);

  return (
    <div id="ButtonPanel" className="calculatorBtnPanel">
      <Grid container columns={4} spacing={2}>
        <CalculatorButton
          onClick={onClick}
          usingBoxIcon={usingBoxIcon}
          char="7"
        >
          {!usingBoxIcon ? <Numeric7 /> : <Numeric7Box />}
        </CalculatorButton>

        <CalculatorButton
          onClick={onClick}
          usingBoxIcon={usingBoxIcon}
          char="7"
        >
          {!usingBoxIcon ? <Numeric8 /> : <Numeric8Box />}
        </CalculatorButton>

        <CalculatorButton
          onClick={onClick}
          usingBoxIcon={usingBoxIcon}
          char="7"
        >
          {!usingBoxIcon ? <Numeric9 /> : <Numeric9Box />}
        </CalculatorButton>

        <CalculatorButton
          onClick={onClick}
          usingBoxIcon={usingBoxIcon}
          char="7"
        >
          {!usingBoxIcon ? <Division /> : <DivisionBox />}
        </CalculatorButton>

        <CalculatorButton
          onClick={onClick}
          usingBoxIcon={usingBoxIcon}
          char="7"
        >
          {!usingBoxIcon ? <Numeric4 /> : <Numeric4Box />}
        </CalculatorButton>

        <CalculatorButton
          onClick={onClick}
          usingBoxIcon={usingBoxIcon}
          char="7"
        >
          {!usingBoxIcon ? <Numeric5 /> : <Numeric5Box />}
        </CalculatorButton>

        <CalculatorButton
          onClick={onClick}
          usingBoxIcon={usingBoxIcon}
          char="7"
        >
          {!usingBoxIcon ? <Numeric6 /> : <Numeric6Box />}
        </CalculatorButton>

        <CalculatorButton
          onClick={onClick}
          usingBoxIcon={usingBoxIcon}
          char="7"
        >
          {!usingBoxIcon ? <Multiplication /> : <MultiplicationBox />}
        </CalculatorButton>

        <CalculatorButton
          onClick={onClick}
          usingBoxIcon={usingBoxIcon}
          char="7"
        >
          {!usingBoxIcon ? <Numeric1 /> : <Numeric1Box />}
        </CalculatorButton>

        <CalculatorButton
          onClick={onClick}
          usingBoxIcon={usingBoxIcon}
          char="7"
        >
          {!usingBoxIcon ? <Numeric2 /> : <Numeric2Box />}
        </CalculatorButton>

        <CalculatorButton
          onClick={onClick}
          usingBoxIcon={usingBoxIcon}
          char="7"
        >
          {!usingBoxIcon ? <Numeric3 /> : <Numeric3Box />}
        </CalculatorButton>

        <CalculatorButton
          onClick={onClick}
          usingBoxIcon={usingBoxIcon}
          char="7"
        >
          {!usingBoxIcon ? <Minus /> : <MinusBox />}
        </CalculatorButton>

        <CalculatorButton
          onClick={onClick}
          usingBoxIcon={usingBoxIcon}
          char="7"
        >
          {!usingBoxIcon ? <CircleSmall /> : <Decimal />}
        </CalculatorButton>

        <CalculatorButton
          onClick={onClick}
          usingBoxIcon={usingBoxIcon}
          char="7"
        >
          {!usingBoxIcon ? <Numeric0 /> : <Numeric0Box />}
        </CalculatorButton>

        <CalculatorButton
          onClick={onClick}
          usingBoxIcon={usingBoxIcon}
          char="7"
        >
          {!usingBoxIcon ? <Equal /> : <EqualBox />}
        </CalculatorButton>

        <CalculatorButton
          onClick={onClick}
          usingBoxIcon={usingBoxIcon}
          char="7"
        >
          {!usingBoxIcon ? <Plus /> : <PlusBox />}
        </CalculatorButton>
      </Grid>
    </div>
  );
}
