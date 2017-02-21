//main dependency
import React from 'react';
import ReactDOM from 'react-dom';
import {
  browserHistory,
  IndexRoute,
  Redirect,
  Route,
  Router
} from 'react-router';

//components
import App from './js/App';
import Home from './js/pages/Home.js';
import Default from './js/pages/Default.js';
import User from './js/pages/User.js';

//styles
import './styles/main.scss';

//transform root into App component
ReactDOM.render((
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Home}/>
				<Route path='default' component={Default} />
				<Route path='/user/:userID' component={User}/>
			</Route>
		</Router>
	), document.getElementById('root'));
