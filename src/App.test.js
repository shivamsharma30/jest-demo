import { add } from './App';

test('should add two numbers', () => {
  const sum = add(3, 4);
  expect(sum).toBe(7);
  expect(add(5, 7)).toBe(11);
});
