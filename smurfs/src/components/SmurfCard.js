import React from 'react';
import { Link } from 'react-router-dom';

const SmurfCard = props => {
    return (
        <div>
            <Link to={`/updatesmurf/${props.smurf.id}`}>
                <h1>Name: {props.smurf.name}</h1>
                <h3>Age: {props.smurf.age}</h3>
                <h3>Height: {props.smurf.height}</h3>
            </Link>
        </div>
    )
}

export default SmurfCard;