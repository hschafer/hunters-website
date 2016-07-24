/**
 * This was taken from the module react-line because of 
 * an error with node_module setup
 */
export default class Line extends React.Component {
  render() {
    var from = this.props.from;
    var to = this.props.to;
    if (to.x < from.x) {
      from = this.props.to;
      to = this.props.from;
    }
    console.log("from.x", from.x, "from.y", from.y, "to.x", to.x, "to.y", to.y);
    const len = Math.sqrt(Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2));
    const angle = Math.atan((to.y - from.y) / (to.x - from.x));
    console.log("Len is", len);
    const style = {
      position: 'absolute',
      transform: `translate(${from.x - .5 * len * (1 - Math.cos(angle))}px, ${from.y + .5 * len * Math.sin(angle)}px) rotate(${angle}rad)`,
      width: len + 'px',
      height: '0px',
      borderBottom: this.props.style || '1px solid black'
    };

    return <div className={this.props.className} style={style}></div>;
  }
}
