/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import TestComponent from "./TestComponent";

const renderComplex = () => {
  const option = {
    size: 12,
    // color: "blue",
  };
  const { getByTestId } = render(<TestComponent option={option} />);
  const dot1 = getByTestId("dot1");
  const dot2 = getByTestId("dot2");
  const dot3 = getByTestId("dot3");
  return { dot1, dot2, dot3 };
};

describe("<BounceDot />", () => {
  it("should dot1 color", () => {
    const { dot1 } = renderComplex();
    expect(dot1).toHaveStyle({
      backgroundColor: "#0271a1",
    });
  });
});
