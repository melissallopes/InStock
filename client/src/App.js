import React from "react";
import Route from "react-router-dom";
import Locations from "./Locations";
import Inventory from "./Inventory";
import { Switch, Route } from "react-router-dom";

function App() {
  return;
  <div>
    <Header />
    <Switch>
      <Inventory />
      <Locations />
    </Switch>
  </div>;
}

export default App;
