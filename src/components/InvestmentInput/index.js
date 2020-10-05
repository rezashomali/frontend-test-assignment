import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";

const InvestmentInput = ({ onInputChange, value }) => {
  return (
    <div>
      <FormControl fullWidth className="inputAmount" variant="outlined">
        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          type="number"
          error={value < 0 ? true : false}
          className="inputAmount__input"
          value={value}
          onChange={onInputChange}
          labelWidth={60}
          startAdornment={
            <InputAdornment className="inputAmount__symbol" position="start">
              €
            </InputAdornment>
          }
        />
        {value < 0 ? (
          <span className="inputAmount__error">incorect value</span>
        ) : (
          ""
        )}
      </FormControl>
    </div>
  );
};

InvestmentInput.propTypes = {
  value: PropTypes.number,
  onInputChange: PropTypes.func,
};

export default InvestmentInput;
