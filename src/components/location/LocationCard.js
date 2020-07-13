import React from "react";
import { Link } from "react-router-dom";

const LocationCard = (props) => {
    return (
        <div className="card">
            <div className="card-content">  
                <h3>Location:</h3>
                <p>{props.location.name}</p>
                <Link to={`/locations/${props.location.id}`}>
                    <button>Details</button>
                </Link>
                <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Close</button>
                <button type="button"onClick={() => props.history.push(`/locations/${props.location.id}/edit`)}>Edit</button>
            </div>
        </div>
    );
};

export default LocationCard;