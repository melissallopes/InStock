import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Components/Header';
import Inventory from './Components/Inventory';
import Locations from './Components/Locations';
import LocationDetail from './Components/LocationsDetail';

function App() {
	return (
		<div className="app">
			<Header />
			<Switch>
				<Route path="/" exact component={Inventory} />
				<Route path="/locations" exact component={Locations} />
				<Route
					path="/locations/:warehouse"
					render={(props) => (
						<div>
							<LocationDetail {...props} />
						</div>
					)}
				/>
			</Switch>
		</div>
	);
}

export default App;
