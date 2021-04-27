import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader";

const App = () => {
	return (
		<Router>
				<Header />

				<Switch>
					<Route exact path="/">
						<div className="flex px-2 lg:px-0 justify-between">
							<h1 className="flex items-center">Home</h1>
						</div>
					</Route>
					<Route path="/tools">
						<h1>Tools</h1>
					</Route>
					<Route path="/trending">
						<h1>Trending</h1>
					</Route>
					<Route path="/about">
						<h1>About</h1>
					</Route>
				</Switch>
			</Router>
	);
}


export default hot(module)(App);
