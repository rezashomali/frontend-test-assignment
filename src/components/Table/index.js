const React = require("react");
import PropTypes from "prop-types";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { calculateTimeSeries } from "../../utils/utils";
import cones from "../../../cones";
const Table = ({ riskLevel }) => {
  const cone = cones.filter((cone) => cone.riskLevel == riskLevel)[0];
  const fee = 0.01;

  var timeSeries = calculateTimeSeries({
    mu: cone.mu,
    sigma: cone.sigma,
    years: 10,
    initialSum: 10000,
    monthlySum: 200,
    fee,
  });

  const months = timeSeries.median.map((v, idx) => idx);
  var dataGood = timeSeries.upper95.map((v) => v.y);
  let dataMedian = timeSeries.median.map((v) => v.y);
  const dataBad = timeSeries.lower05.map((v) => v.y);

  const rows = months.map((entry, idx) => (
    <TableRow key={idx}>
      <TableCell>{entry}</TableCell>
      <TableCell>{dataGood[idx]}</TableCell>
      <TableCell>{dataMedian[idx]}</TableCell>
      <TableCell>{dataBad[idx]}</TableCell>
    </TableRow>
  ));

  return (
    <TableContainer component={Paper}>
      <table>
        <TableHead>
          <TableRow>
            <TableCell key="month">month</TableCell>
            <TableCell key="good">good</TableCell>
            <TableCell key="median">median</TableCell>
            <TableCell key="bad">bad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </table>
    </TableContainer>
  );
};

Table.defaultProps = {
  riskLevel: 3,
};

Table.propTypes = {
  riskLevel: PropTypes.number,
};

export default Table;
