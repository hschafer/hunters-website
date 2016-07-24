import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Router from './router';

injectTapEventPlugin();

ReactDOM.render(Router, document.getElementById('root'));
