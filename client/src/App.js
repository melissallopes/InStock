import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import Inventory from "./Components/Inventory";
import Locations from "./Components/Locations";

function App() {
<<<<<<< HEAD
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact component={Inventory} />
        <Route path="/locations" component={Locations} />
      </Switch>
    </div>
  );
=======
	return (
		<div className="app">
			<Header />
			<Switch>
				<Route path="/" exact component={Inventory} />
				<Route path="/locations" component={Locations} />
			</Switch>
		</div>
	);
>>>>>>> master
}

export default App;
