import Header from '../shared/Header';
import PolitifactVizContainer from './PolitifactVizContainer';

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {containers: [<PolitifactVizContainer key={0}/>]}
  }

  render() {
    return (
      <div>
        <Header title="PolitifactViz"/>
        <div className="row">
          <a 
            className="btn-floating btn-large teal right"
            onClick={this.addContainer.bind(this)}
          >
            <i className="large material-icons">add</i>
          </a>
        </div>
        {this.drawContainers()}
      </div>
    );
  }

  addContainer() {
    var containers = this.state.containers;
    containers.push(<PolitifactVizContainer key={containers.length}/>);
    this.setState({containers: containers});
  }

  drawContainers() {
    var rows = [];
    var containers = this.state.containers;

    if (containers.length % 2 === 1) {
        rows.push(
          <div key="row0" className="row">
            <div key="col0-1" className="col s12">{containers[0]}</div>
          </div>
        );
    }

    for (var i = 1; i < containers.length - 1; i += 2) {
      rows.push(
        <div key={"row" + i} className="row">
          <div key={"col" + i + "-" + 1} className="col s6">{containers[i]}</div>
          <div key={"col" + i + "-" + 2} className="col s6">{containers[i + 1]}</div>
        </div>
      );
    }
    return rows; 
  }
}
