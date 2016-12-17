import { Link } from 'react-router';

export default class ProjectCard extends React.Component {
  render() {
    return (
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            {this.getLink(this.props.isLocal, this.props.projectLink, <img src={this.props.projectImage} />)}
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {this.props.projectName} <i className="material-icons right">more_vert</i>
            </span>
          </div>
          <div className="card-action">
            {this.getLink(this.props.isLocal, this.props.projectLink, "Go!")}
            <a href={this.props.codeLink}>Code</a>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{this.props.projectName}<i className="material-icons right">close</i></span>
            <p>{this.props.projectDescription}</p>
          </div>
        </div>
      </div>

    );
  }

  getLink(local, location, body) {
    if (local) {
        return (<Link to={location}>{body}</Link>);
    } else {
        return (<a href={location}>{body}</a>);
    }
  }
}
