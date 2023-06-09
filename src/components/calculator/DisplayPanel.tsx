import React from 'react';
import './Calculator.css';
import {
  Container,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { CloseCircle } from 'mdi-material-ui';

export default function DisplayPanel({
  expression,
  setExpression,
}: {
  expression: string;
  setExpression: React.Dispatch<React.SetStateAction<string>>;
}) {
  function clearExpression(e: React.MouseEvent) {
    const btn = e.currentTarget;
    setExpression('');
  }

  return (
    <Container id="displayPanel" className="displayPanel" disableGutters>
      <TextField
        id="textField"
        fullWidth
        value={expression}
        InputProps={{
          readOnly: true,
          endAdornment: (
            <IconButton onClick={clearExpression}>
              <CloseCircle />
            </IconButton>
          ),
          sx: {
            name: 'text-field',
            fontSize: '3rem',
            padding: '0',
            margin: '0',
          },
        }}
        inputProps={{
          sx: {
            textAlign: 'right',
          },
        }}
      ></TextField>
    </Container>
  );
}
