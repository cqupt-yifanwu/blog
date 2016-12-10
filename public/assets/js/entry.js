import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import Nav from './component/Nav';
import Lists from './component/Lists.js'
import PutArtical from './component/PutArtical.js'
import AboutMe from './component/AboutMe.js'

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Nav}>
			<Route path="/list" component={Lists}/>
			<Route path="/input" component={PutArtical}/>
			<Route path="/about" component={AboutMe}/>
		</Route>
	</Router>,
    document.getElementById('app')
 );