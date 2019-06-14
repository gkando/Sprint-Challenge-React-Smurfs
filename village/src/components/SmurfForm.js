import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
  const  { name, age, height } = this.state
  axios
    .post(`http://localhost:3333/smurfs`, { name, age, height })
    .then(response => console.log(response))
    .catch(err => console.log(err));
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  this.props.refresh
  this.props.history.push('/')
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfFormContainer">
        <form className="SmurfForm" onSubmit={this.addSmurf}>
          <TextField
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            label="Smurf Name"
            id="outlined-name"
            margin="normal"
            variant="outlined"
          />

          <TextField
              id="outlined-number"
              label="Age"
              name='age'
              value={this.state.age}
              onChange={this.handleInputChange}
              type="number"
              InputLabelProps={{
                  shrink: true,
              }}
              margin="normal"
              variant="outlined"
          />  


            <TextField
              id="outlined-number"
              label="Height"
              name='height'
              value={this.state.height}
              onChange={this.handleInputChange}
              InputLabelProps={{
                  shrink: true,
              }}
              margin="normal"
              variant="outlined"
          />  

          <Button variant="contained" type="submit" color="primary" size="medium">
          Add to the village
        </Button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
