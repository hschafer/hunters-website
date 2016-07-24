import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class CampusMapsDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.value};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({value});
    this.props.buildingSelect(event, index);
  }

  render() {
    return (
      <SelectField 
          className="buildingSelection"
          maxHeight={200}
          floatingLabelText={this.props.name + " Location"}
          fullWidth={true}
          style={{fontSize: "small", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "pre"}}
          menuStyle={{fontSize: "small", textOverflow: "ellipsis", overflow: "hidden"}}
          onChange={this.handleChange}
          value={this.state.value}
      >
        {this.makeBuildingItems()}
      </SelectField>
    );
  }

  makeBuildingItems() {
    var items = [];
    for (var i in this.props.buildings) {
      var building = this.props.buildings[i]
      items.push(
          <MenuItem 
              value={i} 
              key={i} 
              primaryText={`[${building.shortName}] ${building.longName}`}
              style={{fontSize: "small"}}
          />
      );
    }
    return items;
  }
}
