import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import BodyComponente from './components/BodyComponente'
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<AppNavbar />
					<BodyComponente/>
				</div>
			</Provider>
		);
	}
}

export default App;
