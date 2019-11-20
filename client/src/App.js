import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Components/Header';
import Inventory from './Components/Inventory';
import Locations from './Components/Locations';

function App() {
	return (
		<div className="app">
			<Header />
			<Switch>
				<Route path="/" exact component={Inventory} />
				<Route path="/locations" component={Locations} />
			</Switch>
		</div>
	);
}

export default App;
