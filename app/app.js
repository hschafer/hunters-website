import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppRouter from './router';

injectTapEventPlugin();

var app =
  <MuiThemeProvider>
    <AppRouter />
  </MuiThemeProvider>

ReactDOM.render(app, document.getElementById('root'));
