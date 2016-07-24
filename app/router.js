import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import HomePage from './components/HomePage.js';
import CampusMapsContainer from './components/CampusMapsContainer.js';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={HomePage} />
    <Route path="campusmaps" component={CampusMapsContainer} />
  </Router>
)
