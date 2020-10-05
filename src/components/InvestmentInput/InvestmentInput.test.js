import React from "react";
import renderer from "react-test-renderer";
import InvestmentInput from "./index";

test("InvestmentInput component snapshot ", () => {
  const component = renderer.create(
    <InvestmentInput value={1000} onInputChange={() => {}} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
