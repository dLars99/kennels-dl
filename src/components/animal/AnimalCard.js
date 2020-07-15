import React from "react";
import { Link } from "react-router-dom";

const AnimalCard = props => {

    // Default image if no image is in the database
    const image = !props.animal.image ? "dog.svg" : props.animal.image

    return ( 
        <div className="card">
            <div className="card-content" >
                <picture>
                    <img className="card-image" src={require(`./images/${image}`)} alt="My Dog" />
                </picture>
                <h3>
                    Name: <span className="card-petname">{props.animal.name}</span>
                </h3>
                <p>Breed: {props.animal.breed}</p>
            </div>
            {props.deleteAnimal &&
                <button type="button" onClick={() => props.deleteAnimal(props.animal.id)}>Discharge</button>
            }
            <Link to={`/animals/${props.animal.id}`}>
                <button>Details</button>
            </Link>
            <button type="button"onClick={() => props.history.push(`/animals/${props.animal.id}/edit`)}>Edit</button>
        </div>
    );
}; 

export default AnimalCard;