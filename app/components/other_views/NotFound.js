import { Link } from 'react-router';

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="wrapper container">
        <h2>This is not the page you are looking for</h2>
        <p>Unfortunately, I could not find this page for you. Please go back <Link to="/">home!</Link></p>
      </div>
    );
  }
}
