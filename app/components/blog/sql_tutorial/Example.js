import FloatingActionButton from 'material-ui/FloatingActionButton';
import AvPlayArrow from 'material-ui/svg-icons/AV/play-arrow';
import ContentClear from 'material-ui/svg-icons/Content/clear';

import Table from './Table';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {running: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({running: !this.state.running})
  }

  render() {
    var child = null;
    var button = null;
    if (this.state.running) {
      child = <Table key="table" query={this.props.query}/>;
      button = <ContentClear />;
    } else {
      child = this.getQueryExample();
      button = <AvPlayArrow />;
    }
    return (
      <div className="sql_example row valign-wrapper">
        <div className="col s11">
          {child}
        </div>
        <div className="col s1">
          <FloatingActionButton key="button" mini={true} onClick={this.handleClick}>
            {button}
          </FloatingActionButton>
        </div>
      </div>
    );
  }

  getQueryExample() {
    return (
      <pre key="code" className="language-sql z-depth-1">
        <code>
          {this.props.query}
        </code>
      </pre>
    );
  }
}

