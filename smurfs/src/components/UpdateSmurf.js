import React from 'react';


const UpdateSmurf = props => {

console.log(props)
    const { id } = props.match.params;

    const smurf = props.smurfs.find(element => `${element.id}` === id);
    console.log(smurf)
        return (
            <div>
                <h1>Name: {smurf.name}</h1>
                <h3>Age: {smurf.age}</h3>
                <h3>Height: {smurf.height}</h3>
                <button onClick={props.updateSmurf}>Update Smurf</button>
                <button onClick={props.deleteSmurf}>Smurf Smurf</button>
            </div>
        )

}




export default UpdateSmurf;