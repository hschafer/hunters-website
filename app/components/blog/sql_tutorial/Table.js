import axios from 'axios';
import Types from 'mysql';

var TYPE_CODE_TO_STRING = {}
for (var t in Types) {
  TYPE_CODE_TO_STRING[Types[t]] = t;
}

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {table: [], schema: []};
  }

  render() {
    return (
      <table className="centered striped z-depth-1">
        <thead>
          <tr>
            {this.getHeader()}
          </tr>
        </thead>
        <tbody>
          {this.getRows()}
        </tbody>
      </table>
    );
  }

  componentDidMount() {
    axios.get("/api/query", {
      params: {
        q: this.props.query
      }
    }).then(function(response) {
      this.setState({table: response.data.rows, schema: response.data.schema});
    }.bind(this)).catch(function(error) {
      console.log('Error making query', error);
      this.setState({table: null, schema: null});
    }.bind(this));
  }

  getHeader() {
    return this.state.schema.map(function (elem, index) {
      var column_name = elem["name"];
      var column_type = Table.TYPE_CODE_TO_STRING[elem["type"]];
      return <th key={"" + index}>{column_name + " (" + column_type + ")"}</th>;
    });
  }

  getRows() {
    return this.state.table.map(function(row, row_index) {
      return (
        <tr key={"" + row_index}>
          {this.state.schema.map(function(elem, elem_index) {
            return (
              <td key={row_index + "_" + elem_index}>
                {row[elem["name"]]}
              </td>
            );
          }.bind(this))}
        </tr>
      );
    }.bind(this));
  }
}

Table.TYPE_CODE_TO_STRING = TYPE_CODE_TO_STRING;
