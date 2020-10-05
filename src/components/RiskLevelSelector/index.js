import React from "react";
import PropTypes from "prop-types";
import { TextField, MenuItem } from "@material-ui/core";

const RiskLevelSelector = ({
  riskLevel,
  onChangeRiskLevel,
  minRiskLevel,
  maxRiskLevel,
}) => {
  const options = [];
  for (let k = minRiskLevel; k <= maxRiskLevel; k++) {
    options.push(
      <MenuItem key={k} value={k}>
        {k}
      </MenuItem>
    );
  }

  return (
    <div>
      <TextField
        fullWidth
        select
        label="Risk level"
        value={riskLevel}
        onChange={onChangeRiskLevel}
        variant="outlined"
      >
        {options}
      </TextField>
    </div>
  );
};

RiskLevelSelector.defaultProps = {
  riskLevel: 3,
  minRiskLevel: 3,
  maxRiskLevel: 25,
  onChangeRiskLevel: () => {},
};

RiskLevelSelector.propTypes = {
  riskLevel: PropTypes.number,
  minRiskLevel: PropTypes.number,
  maxRiskLevel: PropTypes.number,
  onChangeRiskLevel: PropTypes.func,
};

export default RiskLevelSelector;
