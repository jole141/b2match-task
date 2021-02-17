import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import TableSection from "./components/TableSection";
import ItemInfo from "./components/ItemInfo.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const Home = () => (
    <div>
      <Header />
      <TableSection />
    </div>
  );

  const ItemInfoSection = () => (
    <div>
      <Header />
      <ItemInfo />
    </div>
  );

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/item" component={ItemInfoSection} />
      </Switch>
    </Router>
  );
};

export default App;
