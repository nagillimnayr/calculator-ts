import React, { MouseEventHandler, useState } from 'react';
import ButtonPanel from './ButtonPanel';
import './Calculator.css';
import DisplayPanel from './DisplayPanel';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';

export default function Calculator() {
  const [expression, setExpression] = useState<string>(''); // Math expression

  // Add character to expression string on button click
  const handleClick: MouseEventHandler = (e: React.MouseEvent) => {
    const btn = e.currentTarget as HTMLButtonElement;
    const newExpression = expression + btn.id;
    setExpression(newExpression);
  };

  return (
    <Container id="calculator">
      <Container id="calculatorInner" disableGutters>
        <Stack direction={'column'} spacing={5}>
          <DisplayPanel expression={expression} setExpression={setExpression} />

          <ButtonPanel onClick={handleClick} />
        </Stack>
      </Container>
    </Container>
  );
}
