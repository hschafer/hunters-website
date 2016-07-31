export default class Section extends React.Component {
  render() {
    return (
      <div className="section card-panel">
        <h4 className="grey white-text">{this.props.title}</h4>
        {this.props.children}
      </div>
    );
  }
}
