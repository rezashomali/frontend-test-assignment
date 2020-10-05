import React from "react";
import renderer from "react-test-renderer";
import RiskLevelSelector from "./index";

test("RiskLevelSelector component snapshot ", () => {
  const component = renderer.create(
    <RiskLevelSelector riskLevel={0} onChangeRiskLevel={() => {}} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
