export default class LandingParallax extends React.Component {
  render() {
    return (
      <div id="index-banner" className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
            <h1 className="header center white-text text-lighten-2">Hello!</h1>
        </div>
        <div className="parallax"><img src="images/dock.jpg" alt="Unsplashed background img 1" style={{display: 'block', transform: 'translate3d(-50%, 405px, 0px)'}} /></div>
      </div>
    );
  }
}
