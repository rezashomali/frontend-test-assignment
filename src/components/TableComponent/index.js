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

const TableComponent = ({ months, dataGood, dataMedian, dataBad }) => {
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

TableComponent.propTypes = {
  months: PropTypes.array,
  dataGood: PropTypes.array,
  dataMedian: PropTypes.array,
  dataBad: PropTypes.array,
};

export default TableComponent;
