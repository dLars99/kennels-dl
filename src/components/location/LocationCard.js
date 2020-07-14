import React from "react";
import { Link } from "react-router-dom";

const LocationCard = (props) => {

    // Default image if no image is in the database
    const image = !props.thisLocation.image ? "location-default.jpg" : props.thisLocation.image

    return (
        <div className="card">
            <div className="card-content"> 
                <picture>
                    <img className="card-image" src={require(`./images/${image}`)} alt="Location" />
                </picture>
                <h3>Location:</h3>
                <p>{props.thisLocation.name}</p>
                <Link to={`/locations/${props.thisLocation.id}`}>
                    <button>Details</button>
                </Link>
                <button type="button" onClick={() => props.deleteLocation(props.thisLocation.id)}>Close</button>
                <button type="button" onClick={() => props.history.push(`/locations/${props.thisLocation.id}/edit`)}>Edit</button>
            </div>
        </div>
    );
};

export default LocationCard;