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

export default function ButtonPanel({
  onClick,
}: {
  onClick: React.MouseEventHandler;
}) {
  const [usingBoxIcon, setUsingBoxIcon] = useState<boolean>(false);

  return (
    <div id="ButtonPanel" className="calculatorBtnPanel">
      <Grid container columns={4}>
        <Grid item xs={1}>
          <IconButton onClick={onClick} name="7" aria-label="seven">
            {!usingBoxIcon ? <Numeric7 /> : <Numeric7Box />}
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={onClick} name="8" aria-label="eight">
            {!usingBoxIcon ? <Numeric8 /> : <Numeric8Box />}
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={onClick} name="9" aria-label="nine">
            {!usingBoxIcon ? <Numeric9 /> : <Numeric9Box />}
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={onClick} name="/" aria-label="divide-by">
            {!usingBoxIcon ? <Division /> : <DivisionBox />}
          </IconButton>
        </Grid>

        <Grid item>
          <IconButton onClick={onClick} name="4" aria-label="four">
            {!usingBoxIcon ? <Numeric4 /> : <Numeric4Box />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={onClick} name="5" aria-label="five">
            {!usingBoxIcon ? <Numeric5 /> : <Numeric5Box />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={onClick} name="6" aria-label="six">
            {!usingBoxIcon ? <Numeric6 /> : <Numeric6Box />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={onClick} name="*" aria-label="times">
            {!usingBoxIcon ? <Multiplication /> : <MultiplicationBox />}
          </IconButton>
        </Grid>

        <Grid item>
          <IconButton onClick={onClick} name="1" aria-label="one">
            {!usingBoxIcon ? <Numeric1 /> : <Numeric1Box />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={onClick} name="2" aria-label="two">
            {!usingBoxIcon ? <Numeric2 /> : <Numeric2Box />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={onClick} name="3" aria-label="three">
            {!usingBoxIcon ? <Numeric3 /> : <Numeric3Box />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={onClick} name="-" aria-label="minus">
            {!usingBoxIcon ? <Minus /> : <MinusBox />}
          </IconButton>
        </Grid>

        <Grid item>
          <IconButton onClick={onClick} name="." aria-label="dot">
            {!usingBoxIcon ? <CircleSmall /> : <Decimal />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={onClick} name="0" aria-label="zero">
            {!usingBoxIcon ? <Numeric0 /> : <Numeric0Box />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={onClick} name="=" aria-label="equals">
            {!usingBoxIcon ? <Equal /> : <EqualBox />}
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={onClick} name="+" aria-label="plus">
            {!usingBoxIcon ? <Plus /> : <PlusBox />}
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
