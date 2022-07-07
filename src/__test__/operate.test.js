import operate from '../logic/operate';
import '@testing-library/jest-dom';

describe('Do the tests for the operate file', () => {
  it('Test for the addition', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });
  it('Test for the multiplication', () => {
    expect(operate(2, 2, 'x')).toBe('4');
  });
  it('Test for the addition', () => {
    expect(operate(4, 2, '-')).toBe('2');
  });
  it('Test for the addition', () => {
    expect(operate(5, 2, '%')).toBe('1');
  });
});
