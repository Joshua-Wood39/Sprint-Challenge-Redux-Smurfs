import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import SmurfList from './SmurfList';
import { getSmurf } from '../actions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import AddSmurf from './AddSmurf';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {



  componentDidMount() {
    this.props.getSmurf();
  }


  render() {
    return (
      <Router>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <ul>
            <li>
              <Link to="/">Smurf List</Link>
            </li>
            <li>
              <Link to="/addsmurf">Add A Smurf</Link>
            </li>
          </ul>

          <Route exact path="/" render={() => {
            return <SmurfList smurfs={this.props.smurfs} />
            }} 
          />
          <Route path="/addsmurf" component={AddSmurf} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,

  }
}

export default connect (mapStateToProps, { getSmurf } ) (App);
