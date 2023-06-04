import React, { PropsWithChildren } from 'react';
import './Calculator.css';
import 'katex/dist/katex.css';
import katex from 'katex';
import { SvgIcon, Grid, IconButton, Button, ButtonGroup } from '@mui/material';

export default function CalcIconBtn({
  children,
  char,
  onClick,
}: {
  children: React.ReactNode;
  char: string;
  onClick: React.MouseEventHandler;
}) {
  return (
    <Grid
      item
      display={'flex'}
      xs={1}
      className="calculatorBtn"
      alignContent={'center'}
      justifyContent={'center'}
    >
      <IconButton
        onClick={onClick}
        id={char}
        aria-label={char}
        size="large"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyItems: 'center',
          width: 1,
          height: 1,
          aspectRatio: 1,
          name: { char },
        }}
      >
        {children}
      </IconButton>
    </Grid>
  );
}
