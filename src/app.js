import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/Menu";
import RiskLevelSelector from "./components/RiskLevelSelector";
import Table from "./components/Table";
import Chart from "./components/Chart";

const App = () => {
  const [riskLevel, setRiskLevel] = useState(3);

  return (
    <Router>
      <div>
        <Menu />
        <RiskLevelSelector
          onChangeRiskLevel={(e) => setRiskLevel(e.target.value)}
        />
        <Route
          exact
          path="/"
          component={() => <Table riskLevel={riskLevel} />}
        />
        <Route
          path="/table"
          component={() => <Table riskLevel={riskLevel} />}
        />
        <Route
          path="/chart"
          component={() => <Chart riskLevel={riskLevel} />}
        />
      </div>
    </Router>
  );
};

export default App;
