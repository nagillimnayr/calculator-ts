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
  const [usingBoxIcon, setUsingBoxIcon] = useState<boolean>(true);

  return (
    <div id="ButtonPanel" className="calculatorBtnPanel">
      <Grid container columns={4}>
        <Grid item xs={1}>
          <Button
            onClick={onClick}
            id="7"
            aria-label="seven"
            size="large"
            variant="contained"
            startIcon={!usingBoxIcon ? <Numeric7 /> : <Numeric7Box />}
          ></Button>
        </Grid>
        <Grid item xs={1}>
          <Button
            onClick={onClick}
            id="8"
            aria-label="eight"
            size="large"
            variant="contained"
            startIcon={!usingBoxIcon ? <Numeric8 /> : <Numeric8Box />}
          ></Button>
        </Grid>
        <Grid item xs={1}>
          <Button
            onClick={onClick}
            id="9"
            aria-label="nine"
            size="large"
            variant="contained"
            startIcon={!usingBoxIcon ? <Numeric9 /> : <Numeric9Box />}
          ></Button>
        </Grid>
        <Grid item xs={1}>
          <Button
            onClick={onClick}
            id="/"
            aria-label="divide-by"
            size="large"
            variant="contained"
            startIcon={!usingBoxIcon ? <Division /> : <DivisionBox />}
          ></Button>
        </Grid>

        <Grid item xs={1}>
          <Button
            onClick={onClick}
            id="4"
            aria-label="four"
            size="large"
            variant="contained"
            startIcon={!usingBoxIcon ? <Numeric4 /> : <Numeric4Box />}
          ></Button>
        </Grid>
        <Grid item xs={1}>
          <Button
            onClick={onClick}
            id="5"
            aria-label="five"
            size="large"
            variant="contained"
            startIcon={!usingBoxIcon ? <Numeric5 /> : <Numeric5Box />}
          ></Button>
        </Grid>
        <Grid item xs={1}>
          <Button
            onClick={onClick}
            id="6"
            aria-label="six"
            size="large"
            variant="contained"
            startIcon={!usingBoxIcon ? <Numeric6 /> : <Numeric6Box />}
          ></Button>
        </Grid>
        <Grid item xs={1}>
          <Button
            onClick={onClick}
            id="*"
            aria-label="times"
            size="large"
            variant="contained"
            startIcon={
              !usingBoxIcon ? <Multiplication /> : <MultiplicationBox />
            }
          ></Button>
        </Grid>

        <Grid item xs={1}>
          <Button
            onClick={onClick}
            id="1"
            aria-label="one"
            size="large"
            variant="contained"
            startIcon={!usingBoxIcon ? <Numeric1 /> : <Numeric1Box />}
          ></Button>
        </Grid>
        <Grid item xs={1}>
          <Button
            onClick={onClick}
            id="2"
            aria-label="two"
            size="large"
            variant="contained"
            startIcon={!usingBoxIcon ? <Numeric2 /> : <Numeric2Box />}
          ></Button>
        </Grid>
        <Grid item xs={1}>
          <Button
            onClick={onClick}
            id="3"
            aria-label="three"
            size="large"
            variant="contained"
            startIcon={!usingBoxIcon ? <Numeric3 /> : <Numeric3Box />}
          ></Button>
        </Grid>
        <Grid item xs={1}>
          <Button
            onClick={onClick}
            id="-"
            aria-label="minus"
            size="large"
            variant="contained"
            startIcon={!usingBoxIcon ? <Minus /> : <MinusBox />}
          ></Button>
        </Grid>

        <Grid item xs={1}>
          <Button
            onClick={onClick}
            id="."
            aria-label="dot"
            size="large"
            variant="contained"
            startIcon={!usingBoxIcon ? <CircleSmall /> : <Decimal />}
          ></Button>
        </Grid>
        <Grid item xs={1}>
          <Button
            onClick={onClick}
            id="0"
            aria-label="zero"
            size="large"
            variant="contained"
            startIcon={!usingBoxIcon ? <Numeric0 /> : <Numeric0Box />}
          ></Button>
        </Grid>
        <Grid item xs={1}>
          <Button
            onClick={onClick}
            id="="
            aria-label="equals"
            size="large"
            variant="contained"
            startIcon={!usingBoxIcon ? <Equal /> : <EqualBox />}
          ></Button>
        </Grid>
        <Grid item xs={1}>
          <Button
            onClick={onClick}
            id="+"
            aria-label="plus"
            size="large"
            variant="contained"
            startIcon={!usingBoxIcon ? <Plus /> : <PlusBox />}
          ></Button>
        </Grid>
      </Grid>
    </div>
  );
}
