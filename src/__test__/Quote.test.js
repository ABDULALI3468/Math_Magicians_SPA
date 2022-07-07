import React from "react";
import renderer from "react-test-renderer";
import Quote from "../pages/Quote";
import "@testing-library/jest-dom";

it('Test the Qutoe page', () => {
  const quote = renderer
    .create(<Quote />).toJSON();
  expect(quote).toMatchSnapshot();
})