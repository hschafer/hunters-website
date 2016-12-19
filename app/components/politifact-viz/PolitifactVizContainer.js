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
            data: null,
            header: null
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
              {this.getInputField("name")} or {this.getInputField("party")}
              <br />
              {this.getInputField("subject")}
              <br />
              <RaisedButton
                backgroundColor="#78909C"
                className="button"
                icon={<ActionAssessment color="#FFFFFF"/>}
                onClick={this.getPolitifactData.bind(this)}
              />
            </div>
            {this.state.data &&
                <h3>
                    {this.state.header}
                </h3>
            }
            <Histogram
              data={this.state.data}
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
          maxSearchResults={10}
          openOnFocus={true}
          onUpdateInput={this.handleInput.bind(this, type)}
          onNewRequest={this.handleSelect.bind(this, type)}
          style={{marginLeft: "5px", marginRight: "5px"}}
          value={this.state[type + "Selected"]}
        />
      );
    }

    getHeader(data) {
      var prefix = "Statements made ";
      if (this.state.nameSelected) {
        prefix += "by " + this.state.nameSelected + " ";
      } else if (this.state.partySelected) {
        prefix += "by " + this.state.partySelected + " members ";
      }

      if (this.state.subjectSelected) {
        prefix += "about " + this.state.subjectSelected + " ";
      }
      var totalRatings = data.reduce(function(acc, rating) {
        return acc + rating.count;
      }, 0);
      return prefix + "(" + totalRatings + " reviewed)";
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
          var header = this.getHeader(response.data);
          this.setState({data: response.data, header: header});
        }.bind(this)).catch(function(error) {
          console.log('error', error);
        }.bind(this));
      }
    }

}
