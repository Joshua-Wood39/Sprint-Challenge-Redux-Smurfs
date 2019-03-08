import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import SmurfList from './SmurfList';
import { getSmurf } from '../actions';


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
    console.log(this.props.smurfs)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        <SmurfList smurfs={this.props.smurfs} />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,

  }
}

export default connect (mapStateToProps, { getSmurf } ) (App);
