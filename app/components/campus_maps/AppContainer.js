require('../../../public/css/campusmaps.css');

import axios from 'axios'
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ActionDns from 'material-ui/svg-icons/action/dns';
import NotificationPersonalVideo from 'material-ui/svg-icons/notification/personal-video';

import Menu from './Menu';
import MapDisplay from './MapDisplay';
import Header from '../shared/Header';
import ImplementationDrawer from '../shared/ImplementationDrawer';

import JavaIcon from '../svg/JavaIcon';
import LessIcon from '../svg/LessIcon';
import MaterialUiIcon from '../svg/MaterialUiIcon';
import MaterializeCssIcon from '../svg/MaterializeCssIcon';
import NGINXIcon from '../svg/NGINXIcon';
import NodeIcon from '../svg/NodeIcon';
import ReactIcon from '../svg/ReactIcon';
import WebpackIcon from '../svg/WebpackIcon';


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const SERVER = "http://hschafer.com:8080/campusmaps/";
const GET_BUILDINGS_URL = SERVER + "getBuildings";
const FIND_PATH_URL = SERVER + "findPath";

const IMPLEMENTED_WITH = [
  {
    name: "Front-End",
    icon: NotificationPersonalVideo,
    items: [
      {
        name: "React",
        icon: ReactIcon,
        href: "https://facebook.github.io/react/"
      },
      {
        name: "Materialize CSS",
        icon: MaterializeCssIcon,
        href: "http://materializecss.com/"
      }
    ]
  },
  {
    name: "Back-End",
    icon: ActionDns,
    items: [
      {
        name: "Node.js",
        icon: NodeIcon,
        href: "https://nodejs.org/en/"
      },
      {
        name: "Java",
        icon: JavaIcon,
        href: "https://www.oracle.com/java/index.html"
      },
      {
        name: "NGINX",
        icon: NGINXIcon,
        href: "https://www.nginx.com/"
      },
      {
        name: "Webpack",
        icon: WebpackIcon,
        href: "https://webpack.github.io"
      }
    ]
  }
]

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
          <ImplementationDrawer components={IMPLEMENTED_WITH} />
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

