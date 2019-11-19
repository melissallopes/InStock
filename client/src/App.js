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
				<Route path="/" exact component={Locations} />
				<Route path="/inventory" component={Inventory} />
			</Switch>
		</div>
	);
}

export default App;
