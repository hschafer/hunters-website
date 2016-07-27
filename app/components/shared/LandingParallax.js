export default class LandingParallax extends React.Component {
  render() {
    return (
      <div id="index-banner" className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
            <h1 className="header center white-text text-lighten-2">{this.props.text}</h1>
        </div>
        <div className="parallax"><img src={this.props.imageUrl} alt="Unsplashed background img 1" style={{display: 'block', transform: 'translate3d(-50%, 405px, 0px)'}} /></div>
      </div>
    );
  }
}
