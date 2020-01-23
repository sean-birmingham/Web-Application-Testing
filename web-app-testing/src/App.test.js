import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { addStrike } from "./App";

test("renders without crashing", () => {
  render(<App />);
})

test("addStrike adds 1 to strike state", () => {
  const expected = 1;
  const actual = addStrike(0);

  expect(actual).toBe(expected);
});