import Line from './Line';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import MapsMyLocation from 'material-ui/svg-icons/maps/my-location';
import { teal400, red500} from 'material-ui/styles/colors';

const MAX_WIDTH = 4330;
const MAX_HEIGHT = 2964;
const MARKER_WIDTH = 24;  // Hard coded material-ui, of course

export default class CampusMapsDisplay extends React.Component {
  render() {
    var columnClassName = "col " + this.props.colClass;
    return (
      <div id="mapDisplay" className={columnClassName}>
        <div id="displayWrapper">
          <img key="image" src="/images/campusmaps.jpg" alt="campus map" id="campusImage" className="z-depth-2"/>
          {this.drawPath()}
          <MapsMyLocation {...this.getProps("start", MARKER_WIDTH / 2, MARKER_WIDTH / 2, teal400)} />
          <MapsPlace {...this.getProps("end", MARKER_WIDTH / 2, MARKER_WIDTH, red500)} />
        </div>
      </div>
    );
  }

  drawPath() {
    var pathComponents = [];
    if (this.props.path) {
      var image = document.getElementById("campusImage");
      console.log("campusImage", image);
      this.props.path.forEach(function(step, index) {
          var x1 = this.scale(step.start.x, MAX_WIDTH, image.width, 0);
          var x2 = this.scale(step.end.x, MAX_WIDTH, image.width, 0);
          var y1 = this.scale(step.start.y, MAX_HEIGHT, image.height, 0);
          var y2 = this.scale(step.end.y, MAX_HEIGHT, image.height, 0);
          pathComponents.push(
            <Line
              className="path-line"
              key={"path" + index}
              from={{x: x1, y: y1}}
              to={{x: x2, y: y2}}
              style="2px solid orange"
            />
          );
      }.bind(this));
    }
    return pathComponents;
  }
  
  scale(oldPosition, oldMax, newMax, offset) {
    return oldPosition / oldMax * newMax - offset;
  }

  getProps(marker, xOffset, yOffset, color) {
    var index = this.props[marker];
    var props = {key: marker, id: marker};
    var style ={};
    if (index) {
      var location = this.props.buildings[index].location;
      var image = document.getElementById("campusImage");
      style.left = this.scale(location.x, MAX_WIDTH, image.width, xOffset) + "px";
      style.top = this.scale(location.y, MAX_HEIGHT, image.height, yOffset) + "px";
      //style.left = (location.x * 100 / MAX_WIDTH)  + "%";
      //style.top = (location.y * 100 / MAX_HEIGHT) + "%";
      style.display = "block";
      style.color = color;
    } else {
      style.display = "none" 
    }
    props["style"] = style;
    return props;
  }
}
