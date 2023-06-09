import React from 'react';
import './Calculator.css';
import 'katex/dist/katex.css';
import katex from 'katex';
import {
  SvgIcon,
  Grid,
  IconButton,
  Button,
  ButtonGroup,
  SvgIconTypeMap,
} from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

type BtnProps = {
  children: React.ReactNode;
  char: string;
  onClick: React.MouseEventHandler;
};

export default function CalculatorButton(props: BtnProps) {
  return (
    <Grid
      item
      display={'flex'}
      xs={1}
      className="calculatorBtn"
      alignContent={'center'}
      justifyContent={'center'}
    >
      <Button
        onClick={props.onClick}
        id={props.char}
        aria-label={props.char}
        size="large"
        variant="contained"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyItems: 'center',
          width: 1,
          height: 1,
          aspectRatio: 1,
        }}
      >
        {props.children}
      </Button>
    </Grid>
  );
}
