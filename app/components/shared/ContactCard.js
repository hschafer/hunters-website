export default class ContactCard extends React.Component {
  render() {
    return (
      <div className="userView">
        <img className="background" src="images/pattern.jpg" />
        <a><img className="circle" src="images/hunter.jpg" /></a>
        <a><span className="white-text name">Hunter Schafer</span></a>
        <a href="mailto:hschafer@uw.edu"><span className="white-text email">hschafer@uw.edu</span></a>
      </div>
    );
  }
}
