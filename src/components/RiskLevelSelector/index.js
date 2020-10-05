import React from "react";
import PropTypes from "prop-types";

const RiskLevelSelector = ({
  onChangeRiskLevel,
  minRiskLevel,
  maxRiskLevel,
}) => {
  var defultRiskl = 10;
  const options = [];
  for (let k = 1; k <= maxRiskLevel; ++k) {
    options.push(
      <option key={k} value={k}>
        {k}
      </option>
    );
  }

  return (
    <div>
      Risk level:
      <select onChange={onChangeRiskLevel} defaultValue={defultRiskl}>
        {options}
      </select>
    </div>
  );
};

RiskLevelSelector.defaultProps = {
  minRiskLevel: 3,
  maxRiskLevel: 25,
  onChangeRiskLevel: () => {},
};

RiskLevelSelector.propTypes = {
  minRiskLevel: PropTypes.number,
  maxRiskLevel: PropTypes.number,
  onChangeRiskLevel: PropTypes.func,
};

export default RiskLevelSelector;
