import React from "react";
import renderer from "react-test-renderer";
import { HashRouter as Router } from "react-router-dom";
import Nav from "../components/Navbar/Navbar";
import "@testing-library/jest-dom";

describe("Test of Navbar", () => {
  it("test if Navbar is rendered", () => {
    const navbar = renderer
      .create(
        <Router>
          <Nav />
        </Router>
      )
      .toJSON();
    expect(navbar).toMatchSnapshot();
  });
});
