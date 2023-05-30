import { Stack } from 'immutable';

//function extractNum(expression: string): string {}
function parseExpression(expression: string) {
  // parse the expression

  const numStack = Stack<number>();
  const operatorStack = Stack<string>();

  // substrings should alternate between numbers and operators

  // check if first character is a number
  let isNum: boolean = !isNaN(+expression[0]);

  if (!isNum) {
    throw 'invalid expression!';
  }

  let subStr = expression[0];

  for (let i = 1; i < expression.length; i++) {
    const char = expression[i];

    // Check if next character is a number or decimal point
    if (!isNaN(+char) || char === '.') {
      // if number, add to substring
      subStr = subStr.concat(char);
    } else {
      switch (char) {
        case '+':
      }
    }
  }

  return '';
}

export default parseExpression;
