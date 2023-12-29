/**
 * @jest-environment jsdom
 */

import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { BounceDot } from "./lib";

const renderComplex = () => {
  const { getByTestId } = render(<BounceDot />);
  const dot1 = getByTestId("dot1");
  const dot2 = getByTestId("dot2");
  const dot3 = getByTestId("dot3");
  return { dot1, dot2, dot3 };
};

describe("<BounceDot />", () => {
  it("should dot1 color", () => {
    const { dot1 } = renderComplex();
    expect(dot1).toHaveStyle({
      backgroundColor: "#232323",
    });
  });
});
