export default class LandingParallax extends React.Component {
  render() {
    return (
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <br /><br />
            <h1 className="header center white-text text-lighten-2">Hey there!</h1>
            <div className="row center">
              <h5 className="header col s12 light">I am a graduate student studying Computer Science at the University of Washington</h5>
            </div>
            <div className="row center">
              <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Resume</a>
            </div>
            <br />
            <br />
          </div>
        </div>
        <div className="parallax"><img src="http://themetrust.com/demos/port/wp-content/uploads/dock.jpg" alt="Unsplashed background img 1" style={{display: 'block', transform: 'translate3d(-50%, 405px, 0px)'}} /></div>
      </div>
    );
  }
}
