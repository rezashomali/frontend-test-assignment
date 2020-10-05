import React from "react";
import renderer from "react-test-renderer";
import TableComponent from "./index";

test("TableComponent component snapshot ", () => {
  const component = renderer.create(
    <TableComponent months={[]} dataGood={[]} dataMedian={[]} dataBad={[]} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
