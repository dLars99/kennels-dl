import React from "react";
import { Link } from "react-router-dom";

const LocationCard = (props) => {
    return (
        <div className="card">
            <div className="card-content">  
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