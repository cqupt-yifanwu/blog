import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory,IndexRoute } from 'react-router';
import Home from './component/Home'
import Main from './component/Main';
import Lists from './component/Lists.js';
import PutArtical from './component/PutArtical.js';
import AboutMe from './component/AboutMe.js';
import Detile from './component/Detile.js';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home} />
			<Route path="/list" component={Lists}/>
			<Route path="/input" component={PutArtical}/>
			<Route path="/about" component={AboutMe}/>
			<Route path="/detile/:id" component={Detile} />
		</Route>
	</Router>,
    document.getElementById('app')
 );