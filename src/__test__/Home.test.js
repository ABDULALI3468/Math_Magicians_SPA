import React from "react";
import renderer from "react-test-renderer";
import Home from "../pages/Home";
import "@testing-library/jest-dom";

it("Test the Home page", () => {
  const home = renderer.create(<Home />).toJSON();
  expect(home).toMatchSnapshot();
});
