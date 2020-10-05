import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import Menu from "./components/Menu";
import RiskLevelSelector from "./components/RiskLevelSelector";
import Table from "./components/Table";
import Chart from "./components/Chart";
import "./App.css";

const App = () => {
  const [riskLevel, setRiskLevel] = useState(3);
  const [initialSum, setInitialSum] = useState(1000);
  const [cones, setCones] = useState();
  const [calculation, setCalculation] = useState();

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

          <Route exact path="/">
            <Grid item xs={12}>
              <Table riskLevel={riskLevel} />
            </Grid>
          </Route>

          <Route path="/table">
            <Grid item xs={12}>
              <Table riskLevel={riskLevel} />
            </Grid>
          </Route>

          <Route path="/chart">
            <Grid item xs={12}>
              <Chart riskLevel={riskLevel} />
            </Grid>
          </Route>
        </Grid>
      </Container>
    </Router>
  );
};

export default App;
