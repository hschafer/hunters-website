import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import CampusMapsContainer from './components/campus_maps/AppContainer.js';
import HomePage from './components/home/HomePage.js';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={HomePage} />
    <Route path="campusmaps" component={CampusMapsContainer} />
  </Router>
)
