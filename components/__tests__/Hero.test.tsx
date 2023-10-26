import React from "react";
import { render, cleanup } from "@testing-library/react-native";

import Hero from "../Hero";

describe("Hero component", () => {
  const footprintValue = "1,000";

  afterEach(() => {
    cleanup();
  });

  it("renders text section correctly", () => {
    const { getByText } = render(<Hero footprintValue={footprintValue} />);

    expect(getByText(`${footprintValue} kg`)).toBeTruthy();

    expect(getByText("Your footprint")).toBeTruthy();
    expect(getByText("Take a Step")).toBeTruthy();
  });

  it("renders the clouds corrctly", () => {
    const { getByTestId } = render(<Hero footprintValue={footprintValue} />);

    expect(getByTestId("purple-cloud")).toBeTruthy();
    expect(getByTestId("white-cloud")).toBeTruthy();
  });

  it("renders the inner Svgs correctly", () => {
    const { getByTestId } = render(<Hero footprintValue={footprintValue} />);

    expect(getByTestId("leaf-icon-slim-1")).toBeTruthy;
    expect(getByTestId("leaf-icon-slim-2")).toBeTruthy;
    expect(getByTestId("leaf-icon-wide-1")).toBeTruthy;
    expect(getByTestId("leaf-icon-wide-2")).toBeTruthy;
    expect(getByTestId("butterfly-icon")).toBeTruthy;
  });
});
