import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';

import ActionDns from 'material-ui/svg-icons/action/dns';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentSend from 'material-ui/svg-icons/content/send';
import NotificationPersonalVideo from 'material-ui/svg-icons/notification/personal-video';

import ApacheIcon from '../svg/ApacheIcon'
import LessIcon from '../svg/LessIcon'
import MaterialUiIcon from '../svg/MaterialUiIcon'
import MaterializeCssIcon from '../svg/MaterializeCssIcon'
import ReactIcon from '../svg/ReactIcon'
import WebpackIcon from '../svg/WebpackIcon'

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
        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer 
          open={this.state.open} 
          docked={false} 
          openSecondary={true}
          onRequestChange={(open) => this.setState({open})}
        >
          <Subheader>Technologies Used</Subheader>
          <List>
            <ListItem 
              primaryText="Front-End" 
              leftIcon={<NotificationPersonalVideo />} 
              initiallyOpen={true}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="React"
                  leftIcon={<ReactIcon />}
                  href="https://facebook.github.io/react/"
                />,
                <ListItem
                  key={2}
                  primaryText="Materialize CSS"
                  leftIcon={<MaterializeCssIcon />}
                  href="http://materializecss.com/"
                />,
                <ListItem
                  key={3}
                  primaryText="Material-UI"
                  leftIcon={<MaterialUiIcon />}
                  href="http://www.material-ui.com/"
                />
              ]}
            />
            <ListItem
              primaryText="Back-End"
              leftIcon={<ActionDns />}
              initiallyOpen={true}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="Apache HTTP Server"
                  leftIcon={<ApacheIcon />}
                  href="https://httpd.apache.org/"
                />,
                <ListItem
                  key={2}
                  primaryText="Webpack"
                  leftIcon={<WebpackIcon />}
                  href="https://webpack.github.io/"
                />,
              ]}
            />
          </List> 
        </Drawer>
      </div>
    );
  }
}
