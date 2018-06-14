import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './containers/Header';
import Home from './pages/Home';
import stores from './stores';
import { Provider } from 'mobx-react';

export default class App extends React.Component {
	render() {
		return <Provider {...stores}>
			<Router>
				<div>
					<Header />
					<Route exact path='/' component={Home} />
				</div>
			</Router>
		</Provider>;
	}
}