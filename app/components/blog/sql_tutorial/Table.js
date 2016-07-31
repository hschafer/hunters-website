export default class Table extends React.Component {
  render() {
    return (
      <table className="striped">
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

  getHeader() {
    return this.props.schema.map(function(elem, index) {
      return <th key={"" + index} dataField={elem.toLowerCase()}>{elem}</th>
    });
  }

  getRows() {
    return this.props.data.map(function(row, row_index) {
      return (
        <tr key={"" + row_index}>
          {row.map(function(elem, elem_index) {
            return (
              <td key={row_index + "_" + elem_index}>
                {elem}
              </td>
            );
          })}
        </tr>
      );
    });
  }
}
