import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import NavBar from './components/NavBar'

import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  getSmurfs() {
    axios.get('http://localhost:3333/smurfs')
    .then((response) => {
      this.setState({
        smurfs: response.data
      })
  }).catch(err => console.log(err));

  }

  componentDidMount() {
    this.getSmurfs()
}

  render() {
    return (
      <div className="App">
        <div className='village'>
          <img src={require("./images/house1.png")} alt="smurf-house" /> 
        </div>

        <NavBar />

        <Route
              exact 
              path='/'
              render={props => <Smurfs smurfs={this.state.smurfs} />}
          />

            <Route
              exact
              path="/:id"
              component={SmurfForm}
              refresh={this.getSmurfs()}
             />
      </div>
    );
  }
}

export default App;
