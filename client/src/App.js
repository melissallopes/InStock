import React from 'react';
<<<<<<< HEAD
import { Switch, Route, Redirect } from 'react-router-dom';

=======
import { Switch, Route } from 'react-router-dom';
>>>>>>> master
import Header from './Components/Header';
import Inventory from './Components/Inventory';
import Locations from './Components/Locations';
import LocationDetail from './Components/LocationsDetail';

function App() {
	return (
		<div className="app">
			<Header />
			<Switch>
<<<<<<< HEAD
			<Redirect from="/" to="/inventory" exact component={Inventory}/>
				<Route path="/inventory" component={Inventory} />
				<Route path="/locations" exact component={Locations} />
=======
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
>>>>>>> master
			</Switch>
		</div>
	);
}

export default App;
