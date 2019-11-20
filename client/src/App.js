import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './Components/Header';
import Inventory from './Components/Inventory';
import Locations from './Components/Locations';

function App() {
	return (
		<div className="app">
			<Header />
			<Switch>
			<Redirect from="/" to="/inventory" exact component={Inventory}/>
				<Route path="/inventory" component={Inventory} />
				<Route path="/locations" exact component={Locations} />
			</Switch>
		</div>
	);
}

export default App;
