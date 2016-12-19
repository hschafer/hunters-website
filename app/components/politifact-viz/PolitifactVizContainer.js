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
        people: [],
        selectedPerson: null,
        data: null
      };
    }

    handleInput(searchText, data) {
      this.handleSelect(searchText, data.indexOf(searchText));
    }

    handleSelect(searchText, index) {
      console.log(searchText);
      if (index >= 0) {
        this.setState({selectedPerson: searchText});
      }
    }

    render() {
        return (
          <div>
            <Header title="PolitifactViz"/>
            <div className="name-input">
              <AutoComplete
                id="name-input-box-"
                hintText="Enter speaker to visualize"
                dataSource={this.state.people}
                filter={AutoComplete.fuzzyFilter}
                maxSearchResults={15}
                onUpdateInput={this.handleInput.bind(this)}
                onNewRequest={this.handleSelect.bind(this)}
                value={this.state.selectedPerson}
              />

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

    componentDidMount() {
      axios.get("api/politifact/names").then(function(response) {
        this.setState({people: response.data.map(function(person) { return person.name; })});
      }.bind(this)).catch(function(error) {
        console.log('error', error);
      }.bind(this));
    }

    getPolitifactData() {
      if (this.state.selectedPerson) {
        axios.get("api/politifact/query", {
          params: {
            name: this.state.selectedPerson
          }
        }).then(function(response) {
          this.setState({data: response.data});
        }.bind(this)).catch(function(error) {
          console.log('error', error);
        }.bind(this));
      }
    }

}
