/*
<MapsMyLocation
              {...this.getProps("start", MARKER_WIDTH / 2, MARKER_WIDTH / 2, teal400)}
          />
          <MapsPlace
              {...this.getProps("end", MARKER_WIDTH / 2, MARKER_WIDTH - PIN_OFFSET, red500)}
          />
 */
import { teal400, red500} from 'material-ui/styles/colors';
import MapsMyLocation from 'material-ui/svg-icons/maps/my-location';
import MapsPlace from 'material-ui/svg-icons/maps/place';

import Line from './Line';
import Marker from './Marker';

const MAX_WIDTH = 4330;
const MAX_HEIGHT = 2964;
const MARKER_WIDTH = 24;  // Hard coded material-ui, of course
const PIN_OFFSET = 2.5;   // How far the bottom of the pin is from the point

export default class MapDisplay extends React.Component {
  render() {
    var columnClassName = "col " + this.props.colClass;
    return (
      <div id="mapDisplay" className={columnClassName}>
        <div id="displayWrapper">
          <img
              id="campusImage"
              className="z-depth-2"
              key="image"
              src="/images/campusmaps.jpg"
              alt="campus map"
          />
          {this.drawPath()}
          <Marker
              id="start"
              svgIcon={MapsMyLocation}
              color={teal400}
              targetX = {MARKER_WIDTH / 2}
              targetY = {MARKER_WIDTH / 2}
              {...this.computeLocation("start")}
          />
          <Marker
              id="end"
              svgIcon={MapsPlace}
              color={red500}
              targetX = {MARKER_WIDTH / 2}
              targetY = {MARKER_WIDTH - PIN_OFFSET}
              {...this.computeLocation("end")}
          />
        </div>
      </div>
    );
  }

  drawPath() {
    var pathComponents = [];
    if (this.props.path) {
      var image = document.getElementById("campusImage");
      this.props.path.forEach(function(step, index) {
          var x1 = this.scale(step.start.x, MAX_WIDTH, image.width);
          var x2 = this.scale(step.end.x, MAX_WIDTH, image.width);
          var y1 = this.scale(step.start.y, MAX_HEIGHT, image.height);
          var y2 = this.scale(step.end.y, MAX_HEIGHT, image.height);
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

  computeLocation(marker) {
    var result = {};
    var index = this.props[marker];
    if (index) {
      var location = this.props.buildings[index].location;
      var image = document.getElementById("campusImage");
      result.x = this.scale(location.x, MAX_WIDTH, image.width);
      result.y = this.scale(location.y, MAX_HEIGHT, image.height);
    }
    return result;
  }

  scale(oldPosition, oldMax, newMax) {
    return oldPosition / oldMax * newMax;
  }
}
