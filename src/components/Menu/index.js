import React from "react";
import { Link } from "react-router-dom";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";

const Menu = () => {
  return (
    <div>
      <ToggleButtonGroup exclusive aria-label="text alignment">
        <ToggleButton value="/table">
          <Link to="/table">Table</Link>
        </ToggleButton>
        <ToggleButton value="/chart">
          <Link to="/chart">Chart</Link>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default Menu;
