import React, { MouseEventHandler, useState } from 'react';
import ButtonPanel from './ButtonPanel';
import './Calculator.css';
import DisplayPanel from './DisplayPanel';
import Stack from '@mui/material/Stack';

export default function Calculator() {
  const [expression, setExpression] = useState<string>('');

  // Add character to expression string on button click
  const handleClick: MouseEventHandler = (e: React.MouseEvent) => {
    const btn = e.target as HTMLButtonElement;
    const newExpression = expression + btn.id;
    setExpression(newExpression);
  };

  return (
    <Container id="calculator">
      <Container id="calculatorInner">
        <Stack direction={'column'} spacing={5}>
          <DisplayPanel displayStr={expression} />

          <ButtonPanel onClick={handleClick} />
        </Stack>
      </Container>
    </Container>
  );
}
