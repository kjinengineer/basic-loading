/**
 * @jest-environment jsdom
 */

import React from "react";
import { fireEvent, render } from "@testing-library/react";
import CountEx from "../src/CountEx";

const renderComplex = () => {
  const { getByText, getByTestId } = render(<CountEx />);
  const increaseBtn = getByText("increase");
  const decreaseBtn = getByText("decrease");
  const count = getByTestId("count");
  return { increaseBtn, decreaseBtn, count };
};

describe("<CountEx />", () => {
  it("should increase count", () => {
    const { increaseBtn, count } = renderComplex();
    fireEvent.click(increaseBtn);
    expect(count.textContent).toBe("1");
  });

  it("should decrease count", () => {
    const { decreaseBtn, count } = renderComplex();
    fireEvent.click(decreaseBtn);
    expect(count.textContent).toBe("-1");
  });

  it("should same count", () => {
    const { increaseBtn, decreaseBtn, count } = renderComplex();
    fireEvent.click(increaseBtn);
    fireEvent.click(decreaseBtn);
    expect(count.textContent).toBe("0");
  });
});
