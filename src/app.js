import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import { getCalculation } from "./utils/utils";
import useDebounce from "./utils/useDebounce";
import Menu from "./components/Menu";
import RiskLevelSelector from "./components/RiskLevelSelector";
import TableComponent from "./components/TableComponent";
import Chart from "./components/Chart";
import InvestmentInput from "./components/InvestmentInput";
import "./App.css";

const AMOUNT_DELAY = 1000; // for use in useDebounce

const App = () => {
  const [riskLevel, setRiskLevel] = useState(3);
  const [initialSum, setInitialSum] = useState(10000);
  const [cones, setCones] = useState();
  const [calculation, setCalculation] = useState();

  const debouncedAmount = useDebounce(Number(initialSum), AMOUNT_DELAY);

  useEffect(() => {
    fetch("http://localhost:3000/api/cones")
      .then((response) => response.json())
      .then((data) => setCones(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    cones && setCalculation(getCalculation(cones, riskLevel, debouncedAmount));
  }, [cones, riskLevel, debouncedAmount]);

  return (
    <Router>
      <Container maxWidth="md" className="container">
        <Grid container>
          <Grid item xs={12}>
            <Menu />
          </Grid>
          <Grid item xs={6}>
            <RiskLevelSelector
              riskLevel={riskLevel}
              onChangeRiskLevel={(e) => setRiskLevel(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <InvestmentInput
              value={Number(initialSum)}
              onInputChange={(e) => setInitialSum(e.target.value)}
            />
          </Grid>

          <Route exact path="/">
            <Grid item xs={12}>
              {calculation && <TableComponent {...calculation} />}
            </Grid>
          </Route>

          <Route path="/table">
            <Grid item xs={12}>
              {calculation && <TableComponent {...calculation} />}
            </Grid>
          </Route>

          <Route path="/chart">
            <Grid item xs={12}>
              {calculation && (
                <Chart
                  riskLevel={riskLevel}
                  initialSum={debouncedAmount}
                  {...calculation}
                />
              )}
            </Grid>
          </Route>
        </Grid>
      </Container>
    </Router>
  );
};

export default App;
