import React from "react";
import { Link } from "react-router-dom";

const AnimalCard = props => {

    // Default image if no image is in the database
    const image = !props.animal.image ? "dog.svg" : props.animal.image

    return ( 
        <div className="card">
            <div className="card-content" >
                <picture className="card-image">
                    <img src={require(`./images/${image}`)} alt="My Dog" />
                </picture>
                <h3>
                    Name: <span className="card-petname">{props.animal.name}</span>
                </h3>
                <p>Breed: {props.animal.breed}</p>
                <button type="button" onClick={() => props.deleteAnimal(props.animal.id)}>Discharge</button>
            </div>
            <Link to={`/animals/${props.animal.id}`}>
                <button>Details</button>
            </Link>
        </div>
    );
};

export default AnimalCard;