import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import ContactCard from "./ContactCard";

export default class ImplementationDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <div
            className="fixed-action-btn"
            style={{bottom: "45px", right: "24px"}}
            onClick={this.handleToggle}
        >
          <a className="btn-floating btn-large teal lighten-1">
            <i className="material-icons">info_outline</i>
          </a>
        </div>
        <Drawer
          containerClassName="side-nav"
          open={this.state.open}
          docked={false}
          openSecondary={true}
          width={300}
          onRequestChange={(open) => this.setState({open})}
        >
          <ContactCard />
          <Subheader>This Page is Built With</Subheader>
          <List>
            {this.getListItems(this.props.components)}
          </List>
        </Drawer>
      </div>
    );
  }

  getListItems(sections) {
	 var listItems = [];
	 sections.forEach(function(elem, index) {
		var props = {primaryText: elem.name, leftIcon: <elem.icon />};
		if (elem.items) {
		  props.initiallyOpen = true;
		  props.primaryTogglesNestedList = true;
		  props.nestedItems = this.getListItems(elem.items);
		} else if (elem.href) {
		  props.href = elem.href;
		}
		listItems.push(<ListItem key={index} {...props} />);
	 }.bind(this));
	 return listItems;
  }
}
