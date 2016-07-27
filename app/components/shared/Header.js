import AppBar from 'material-ui/AppBar'
import gray50 from 'material-ui/styles/colors';
import ActionHome from 'material-ui/svg-icons/action/home';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <AppBar
        className="valign-wrapper"
        title={this.props.title}
        showMenuIconButton={false}
        style={{backgroundColor: gray50}}
        titleStyle={{color: '#444'}}
        iconElementRight={<Link to="/"><ActionHome /></Link>}
        iconStyleRight={{marginRight: "0px"}}
      />
    );
  }
}
