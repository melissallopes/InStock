<<<<<<< HEAD
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Components/Header";
import Inventory from "./Components/Inventory";
import Locations from "./Components/Locations";
import LocationDetail from "./Components/LocationsDetail";
import InventoryDetail from "./Components/InventoryDetail";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/inventories" component={Inventory} />
        <Route
          path="/inventory/:item"
          render={props => (
            <div>
              <InventoryDetail {...props} />
            </div>
          )}
        />
        <Redirect from="/" to="/inventories" exact component={Inventory} />

        <Route path="/locations" exact component={Locations} />
        <Route
          path="/locations/:warehouse"
          render={props => (
            <div>
              <LocationDetail {...props} />
            </div>
          )}
        />
      </Switch>
    </div>
  );
=======
import React from 'react';
import Header from './Components/Header';
import Inventory from './Components/Inventory';
import Locations from './Components/Locations';
import LocationDetail from './Components/LocationsDetail';
import { withRouter, Switch, Redirect, Route } from 'react-router-dom';
import NewLocation from './Components/NewLocation';

<<<<<<< HEAD
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
=======
function App() {
	return (
		<div className="app">
			<Header/>
			<Switch>

				<Redirect from="/" to="/inventory" exact component={Inventory}/>
				<Route path="/" component={Inventory} />
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
>>>>>>> master
>>>>>>> master
}
>>>>>>> master

export default withRouter(App);
