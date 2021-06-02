import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { isAuthenticated } from "./services/auth";
import Home from './pages/Home';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			isAuthenticated() ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: "/", state: { from: props.location } }} />
			)
		}
	/>
);

const Routes = () => (
	<BrowserRouter>
		<>
			<Switch>
				<Route exact path="/" component={SignIn} />
				<Route exact path="/signup" component={SignUp} />
				<PrivateRoute path="/home" component={Home} />
				<Route path="*" component={() => <h1>Page not found</h1>} />
			</Switch>
		</>
	</BrowserRouter>
);


export default Routes;
