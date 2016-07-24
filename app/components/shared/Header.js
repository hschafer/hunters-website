import AppBar from 'material-ui/AppBar'
import gray50 from 'material-ui/styles/colors';

export default class Header extends React.Component {
  render() {
    return (
      <AppBar
        title={this.props.title}
        showMenuIconButton={false}
        style={{backgroundColor: gray50}}
        titleStyle={{color: '#444'}}
      />
    );
  }
}
