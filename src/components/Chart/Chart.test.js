import React from "react";
import renderer from "react-test-renderer";
import Chart from "./index";

test("Chart component snapshot ", () => {
  const component = renderer.create(
    <Chart
      riskLevel={0}
      initialSum={1000}
      labels={[]}
      months={[]}
      dataGood={[]}
      dataMedian={[]}
      dataBad={[]}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
