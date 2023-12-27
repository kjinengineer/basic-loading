/**
 * @jest-environment jsdom
 */

import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { BounceDot } from "./lib";

const renderComplex = () => {
  const { getByTestId } = render(<BounceDot />);
  // const increaseBtn = getByText("increase");
  // const decreaseBtn = getByText("decrease");
  const dot1 = getByTestId("dot1");
  const dot2 = getByTestId("dot2");
  const dot3 = getByTestId("dot3");
  return { dot1, dot2, dot3 };
};

// test("MyComponent renders with the correct color", () => {
//   // Arrange: 렌더링
//   const { dot1 } = renderComplex();

//   // Assert: 스타일 확인
//   expect(dot1).toHaveStyle({
//     backgroundColor: "#232323", // 여기에 예상하는 색상을 넣어주세요
//   });
// });

describe("<BounceDot />", () => {
  it("should dot1 color", () => {
    const { dot1 } = renderComplex();
    expect(dot1).toHaveStyle({
      backgroundColor: "#232323", // 여기에 예상하는 색상을 넣어주세요
    });
    // expect(count.textContent).toBe("1");
  });
  // it("should decrease count", () => {
  //   const { decreaseBtn, count } = renderComplex();
  //   fireEvent.click(decreaseBtn);
  //   expect(count.textContent).toBe("-1");
  // });
  // it("should same count", () => {
  //   const { increaseBtn, decreaseBtn, count } = renderComplex();
  //   fireEvent.click(increaseBtn);
  //   fireEvent.click(decreaseBtn);
  //   expect(count.textContent).toBe("0");
  // });
});
