import React from "react";
import renderer from "react-test-renderer";
import Calculator from "../components/Calculator";
import "@testing-library/jest-dom";

describe("Test of Calculator page", () => {
  it("test if Calculator page is rendered", () => {
    const calculator = renderer.create(<Calculator />).toJSON();
    expect(calculator).toMatchSnapshot();
  });
});
