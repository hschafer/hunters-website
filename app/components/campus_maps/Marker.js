export default class Marker extends React.Component {
  render() {
    console.log(this.props);
    return (
      <this.props.svgIcon
          key={this.props.key}
          id={this.props.id}
          style={this.getStyle()}
      />
    );
  }

  getStyle() {
    var style = {color: this.props.color};
    if (this.props.x && this.props.y) {
      style.left = (this.props.x - this.props.targetX) + "px";
      style.top = (this.props.y - this.props.targetY) + "px";
    } else {
      style.display = "none";
    }
    return style;
  }
}
