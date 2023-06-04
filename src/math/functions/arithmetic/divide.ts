import { isZero } from 'mathjs';

function divide(numerator: number, denominator: number): number {
  if (isZero(denominator)) {
    throw 'Cannot divide by 0!';
  }
  return numerator / denominator;
}

export default divide;
