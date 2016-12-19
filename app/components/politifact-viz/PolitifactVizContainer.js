require('../../../public/css/politifact-viz.css')

import axios from 'axios'
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAssessment from 'material-ui/svg-icons/action/assessment';

import Header from '../shared/Header';
import Histogram from './Histogram';

export default class PolitifactVizContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameOptions: [],
            subjectOptions: [],
            partyOptions: [],
            nameSelected: null,
            subjectSelected: null,
            partySelected: null,
            data: null
        };
    }

    handleInput(type, searchText, data) {
      this.handleSelect(searchText, data.indexOf(searchText), type);
    }

    handleSelect(type, searchText, index) {
      console.log(type, ":", searchText);
      if (index >= 0) {
        var newState = {};
        newState[type + "Selected"] = searchText;
        this.setState(newState);
      }
    }

    render() {
        return (
          <div>
            <Header title="PolitifactViz"/>
            <div className="input">
              {this.getInputField("name")}
              <br />
              {this.getInputField("subject")}
              <br />
              {this.getInputField("party")}
              <br />
              <RaisedButton
                backgroundColor="#78909C"
                className="button"
                icon={<ActionAssessment color="#FFFFFF"/>}
                onClick={this.getPolitifactData.bind(this)}
              />
            </div>
            <Histogram
              data={this.state.data}
              name={this.state.selectedPerson}
            />
          </div>
        );
    }

    getInputField(type) {
      return (
        <AutoComplete
          id={type + "-input-box"}
          hintText={"Filter by " + type}
          dataSource={this.state[type + "Options"]}
          filter={AutoComplete.fuzzyFilter}
          maxSearchResults={15}
          onUpdateInput={this.handleInput.bind(this, type)}
          onNewRequest={this.handleSelect.bind(this, type)}
          value={this.state[type + "Selected"]}
        />
      );
    }

    componentDidMount() {
      this.get("api/politifact/names", "name");
      this.get("api/politifact/subjects", "subject");
      this.get("api/politifact/parties", "party");
    }

    get(url, type) {
      axios.get(url).then(function(response) {
        var newState = {};
        newState[type + "Options"] = response.data.map(function(result) { return result.name; });
        this.setState(newState);
      }.bind(this)).catch(function(error) {
        console.log('error', error);
      }.bind(this)); 
    }

    getPolitifactData() {
      console.log("Querying with state: ", this.state);
      if (this.state["nameSelected"] || this.state["subjectSelected"] || this.state["partySelected"]) {
        axios.get("api/politifact/query", {
          params: {
            name: this.state["nameSelected"],
            subject: this.state["subjectSelected"],
            party: this.state["partySelected"]
          }
        }).then(function(response) {
          this.setState({data: response.data});
        }.bind(this)).catch(function(error) {
          console.log('error', error);
        }.bind(this));
      }
    }

}
