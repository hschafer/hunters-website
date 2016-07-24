require('../../public/css/main.css')
/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ImplementationDrawer from './ImplementationDrawer';
import Header from './Header';
import LandingParallax from './LandingParallax';
import ProjectCard from './ProjectCard';

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
            <div className="section">
              <div className="row">
                <ProjectCard
                  projectName="Campus Paths - Web"
                  projectImage="/images/campusmaps_small.jpg"
                  projectDescription="In our Software Design & Implementation class, we developed a Java GUI application that could find paths between buildings on campus in order to learn about GUI creation and practice the MVC pattern. I took the project an extra step by making it a web app."
                  projectLink="campusmaps"
                  codeLink="https://www.github.com"
                />
              </div>
            </div>
          </div>
          <ul className="collection with-header">
            <li className="collection-header"><h4>Projects</h4></li>
            <li className="collection-item"><div>Here<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
            <li className="collection-item"><div>is<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
            <li className="collection-item"><div>a<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
            <li className="collection-item"><div>list<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
            <li className="collection-item"><div>of<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
            <li className="collection-item"><div>projects<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
            <li className="collection-item"><div>so<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
            <li className="collection-item"><div>that<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
            <li className="collection-item"><div>I<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
            <li className="collection-item"><div>am<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
            <li className="collection-item"><div>able<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
            <li className="collection-item"><div>to<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
            <li className="collection-item"><div>scroll<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
          </ul>
          <h4>Some about me!</h4>
          <ImplementationDrawer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default HomePage;
