import axios from "axios"
import RaisedButton from "material-ui/RaisedButton";
import { teal400 } from "material-ui/styles/colors";
import CampusMapsDropDown from "./CampusMapsDropDown";


export default class CampusMapMenu extends React.Component {
  render() {
    var columnClassName = "col " + this.props.colClass;
    return (
      <form id="menu" className={columnClassName}> 
        <CampusMapsDropDown 
            key="start"
            name="Start" 
            buildings={this.props.buildings} 
            buildingSelect={this.props.buildingSelect.bind(undefined, "start")}
            value={this.props.start}
        />
        <CampusMapsDropDown 
            key="end"
            name="End" 
            buildings={this.props.buildings} 
            buildingSelect={this.props.buildingSelect.bind(undefined, "end")}
            value={this.props.end}
        />
        <RaisedButton 
            key="button"
            backgroundColor={teal400}
            fullWidth={true} 
            label="Find Path!"
            labelStyle={{color: "#FFFFFF"}}
            disabled={!(this.props.start && this.props.end)}
            onClick={this.props.findPath}
        />
      </form>
    );
  }
}
