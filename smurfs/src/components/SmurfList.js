import React from 'react';
import SmurfCard from './SmurfCard';

const SmurfList = props => {
    console.log(props.smurfs);
    return (
        <div>
            {props.smurfs.map(smurf => (
                <SmurfCard smurf={smurf} key={smurf.name} />
            ))}
        </div>
    )
}

export default SmurfList;