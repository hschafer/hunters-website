require('materialize-css/dist/css/materialize.css');
require('materialize-css/dist/js/materialize.js');  
require('materialize-css/js/init.js');

require('../resources/styles/main.css');

import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory } from 'react-router';
import HomePage from './HomePage'; 
import CampusMaps from './CampusMaps';
import createHistory from 'history/lib/createBrowserHistory';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

var router = 
  <Router history={browserHistory}>
    <Route path="/" component={HomePage} />
    <Route path="/campusmaps" component={CampusMaps} />
  </Router>

render(router, document.getElementById('app'));
