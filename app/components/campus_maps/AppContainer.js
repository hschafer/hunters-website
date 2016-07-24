require('../../../public/css/campusmaps.css');

import axios from 'axios'
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Menu from './Menu';
import MapDisplay from './MapDisplay';
import Header from '../shared/Header';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const SERVER = "http://hschafer:8080/campusmaps/";
const GET_BUILDINGS_URL = SERVER + "getBuildings";
const FIND_PATH_URL = SERVER + "findPath";


export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buildings: [],
      start: null,
      end: null,
      path: null,
    }
  }
 
  componentDidMount() {
    axios.get(GET_BUILDINGS_URL).then(function(response) {
      this.setState({buildings: response.data.result});
    }.bind(this)).catch(function(error) {
      console.log('error', error);
    }.bind(this));
  } 

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header key="header" title="Campus Maps - Web" />
          <div key="wrapper" className="row">
            <MapDisplay  
                key="display"
                colClass="s12 m9"
                buildings={this.state.buildings}
                start={this.state.start}
                end={this.state.end}
                path={this.state.path}
            />
            <Menu 
                key="menu"
                colClass="s12 m3" 
                buildings={this.state.buildings}
                buildingSelect={this.buildingSelect.bind(this)}
                findPath={this.findPath.bind(this)}
                start={this.state.start}
                end={this.state.end}
            />  
          </div>
        </div>
      </MuiThemeProvider>
    );
  }

  buildingSelect(markerType, event, index) {
    var newState = {path: null};
    newState[markerType] = index;
    this.setState(newState); 
  }

  findPath() {
    if (this.state["start"] && this.state["end"]) {
      axios.get(FIND_PATH_URL, {
        params:  {
          start: this.state.buildings[this.state.start].shortName,
          end: this.state.buildings[this.state.end].shortName 
        }
      }).then(function(response) {
        this.setState({path: response.data.result});
      }.bind(this)).catch(function(error) {
        console.log('error', error);
      }.bind(this));
    }
  }
}

