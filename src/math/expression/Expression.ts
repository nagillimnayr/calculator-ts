import add from '../functions/arithmetic/add';
import divide from '../functions/arithmetic/divide';
import multiply from '../functions/arithmetic/multiply';
import subtract from '../functions/arithmetic/subtract';

/**
 * @description The Expression class represents a mathematical
 * expression with two operands and an operator
 * @author Ryan Milligan
 * @date 28/05/2023
 * @class Expression
 */
class Expression {
  operand1: number;
  operand2: number;
  operator: string;

  constructor(operand1: number, operand2: number, operator: string) {
    this.operand1 = operand1;
    this.operand2 = operand2;
    this.operator = operator;
  }

  evaluate(): number {
    switch (this.operator) {
      case '+':
        return add(this.operand1, this.operand2);
      case '-':
        return subtract(this.operand1, this.operand2);
      case '*':
        return multiply(this.operand1, this.operand2);
      case '/':
        return divide(this.operand1, this.operand2);
      default:
        throw 'invalid operator!';
    }
  }
}
