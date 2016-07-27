export default class LandingParallax extends React.Component {

  render() {
    var transformStyle = "translate3d(-50%, " + this.props.imageOffset + ", 0px)";

    var defaultStyles = {display: "block", transform: transformStyle};
    var styles = Object.assign({}, defaultStyles, this.props.styles || {});
    return (
      <div id="index-banner" className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
            <h1 className="header center white-text text-lighten-2">{this.props.text}</h1>
        </div>
        <div className="parallax"><img src={this.props.imageUrl} alt="Unsplashed background img 1" style={styles} /></div>
      </div>
    );
  }
}
