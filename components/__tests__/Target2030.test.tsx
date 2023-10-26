import React from "react";
import { render } from "@testing-library/react-native";
import Target2030 from "../Target2030";

describe("Target2030 component", () => {
  it("renders the 2030 target value passed as a prop", () => {
    const testValue = "3,000";
    const { getByText } = render(<Target2030 twentyThirtyTarget={testValue} />);

    expect(getByText(`Your 2030 target is 3,000 kg`)).toBeTruthy();
  });
});
