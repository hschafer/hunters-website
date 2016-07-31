import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import CampusMapsContainer from './components/campus_maps/AppContainer';
import HomePage from './components/home/HomePage';
import NotFound from './components/other_views/NotFound';
import RequestPermission from './components/other_views/RequestPermission';
import Article from './components/blog/sql_tutorial/Article';

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={HomePage} />
        <Route path="campusmaps" component={CampusMapsContainer} />
        <Route path="blog">
          <Route path="sql_tutorial" component={Article} />
        </Route>

        <Route path="request_permission" component={RequestPermission} />
        <Route path="*" component={NotFound} />

      </Router>
    );
  }
}
