import React from 'react';
import Header from './Components/Header';
import Inventory from './Components/Inventory';
import Locations from './Components/Locations';
import LocationDetail from './Components/LocationsDetail';
import { withRouter, Switch, Redirect, Route } from 'react-router-dom';
import NewLocation from './Components/NewLocation';

const App = ({ location }) => (
	<div>
		{location.pathname !== '/location/new' && <Header />}
		<Switch>
			<Redirect from="/" to="/inventory" exact component={Inventory} />
			<Route path="/inventory" component={Inventory} />
			<Route path="/locations" exact component={Locations} />
			<Route
				path="/locations/:warehouse"
				render={(props) => (
					<div>
						<LocationDetail {...props} />
					</div>
				)}
			/>
			<Route path="/location/new" component={NewLocation} />
		</Switch>
	</div>
);


export default withRouter(App);
