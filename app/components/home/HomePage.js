require('../../../public/css/main.css')

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ActionDns from 'material-ui/svg-icons/action/dns';
import NotificationPersonalVideo from 'material-ui/svg-icons/notification/personal-video';

import LandingParallax from './LandingParallax';
import ProjectCard from './ProjectCard';
import Header from '../shared/Header';
import ImplementationDrawer from '../shared/ImplementationDrawer';

import LessIcon from '../svg/LessIcon';
import MaterialUiIcon from '../svg/MaterialUiIcon';
import MaterializeCssIcon from '../svg/MaterializeCssIcon';
import NGINXIcon from '../svg/NGINXIcon';
import NodeIcon from '../svg/NodeIcon';
import ReactIcon from '../svg/ReactIcon';
import WebpackIcon from '../svg/WebpackIcon';


const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

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

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header title="Hunter Schafer"/>
          <LandingParallax />
          <div className="container">
            <div className="section card-panel">
              <h4 className="grey white-text">Bio</h4>
              <div className="bio row valign-wrapper">
                <div className="col s4">
                  <img className="headshot circle z-depth-1" src="images/hunter.jpg" />
                </div>
                <div className="col s8">
                  <h2>Hunter Schafer</h2>
                  <p className="promo-caption">University of Washington</p>
                  <p className="promo-caption">Combined Bachelors / Masters of Computer Science</p>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
            <div className="section card-panel">
              <h4 className="grey white-text">Projects</h4>
              <div className="row">
                <ProjectCard
                  projectName="Campus Paths - Web"
                  projectImage="/images/campusmaps_small.jpg"
                  projectDescription="In our Software Design & Implementation class, we developed a Java GUI application that could find paths between buildings on campus in order to learn about GUI creation and practice the MVC pattern. I took the project an extra step by making it a web app."
                  projectLink="campusmaps"
                  codeLink="https://www.github.com"
                />
                <ProjectCard
                  projectName="Personal Website"
                  projectImage="images/website.png"
                  projectDescription="Hold onto your hat, it's about to get meta! I wanted to put a link here since I've spent some time on this and I wanted to share the code. If you find a bug, please file an issue on GitHub!"
                  projectLink="/"
                  codeLink="https://github.com/hschafer/hunters-website"
                />
              </div>
            </div>
          </div>
          <ImplementationDrawer components={IMPLEMENTED_WITH} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default HomePage;
