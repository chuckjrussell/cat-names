import React, { Component } from 'react';
import {_} from 'underscore';
import CatsList from './CatsList';
import './grayCat.jpeg';
import './CatPage.css';

class CatPage extends Component {

  constructor(props){

    super(props);

    this.state = {
      groupedGenders: {
          Male: [],
          Female: []
      }
    }
  }

  componentDidMount(){
    fetch('https://cors-anywhere.herokuapp.com/http://dev-test.hews.com.au/people.json')
    .then(response => {
      response.json().then(data => {

        var genders = _.groupBy(data, 'gender');
        this.setState({groupedGenders: genders});

      }).catch(error => {console.error(error)})
    }).catch(error => {});
  }


  render() {
    return (
      <div>
          <div className="container">
            <div class="jumbotron">
                <h1 class="display-4">CATS</h1>
                <p class="lead">Below you can view cat names grouped by owner gender.</p>
            </div>

            <div className="row">
                <CatsList title="Male" people={this.state.groupedGenders.Male}/>
                <CatsList title="Female" people={this.state.groupedGenders.Female}/>
            </div>
          </div>
      </div>
    );
  }
}

export default CatPage;
