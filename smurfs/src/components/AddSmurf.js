import React from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

class AddSmurf extends React.Component {
    state = {
        smurfObject: {
            name: '',
            age: '',
            height: ''
        }
    }

    changeHandler = e => {
        this.setState({
            smurfObject: {
                ...this.state.smurfObject,
                [e.target.name]: e.target.value
            }
        })
    }

    smurfAdder = e => {
        console.log(this.props)
        e.preventDefault();
        this.props.addSmurf(this.state.smurfObject)
        .then(() => this.props.history.push("/"))
    };

    render() {
        console.log(this.props)
        return (
            <form onSubmit={this.smurfAdder}>
                <input
                    type="text"
                    name="name"
                    value={this.state.smurfObject.name}
                    onChange={this.changeHandler}
                    placeholder="...name..."
                />

                <input
                    type="number"
                    name="age"
                    value={this.state.smurfObject.age}
                    onChange={this.changeHandler}
                    placeholder="...age..."
                />

                <input
                    type="text"
                    name="height"
                    value={this.state.smurfObject.height}
                    onChange={this.changeHandler}
                    placeholder="...height..."
                />

                <button>Smurf</button>
            </form>
        )
    }
}

export default connect(null, { addSmurf }) (AddSmurf);