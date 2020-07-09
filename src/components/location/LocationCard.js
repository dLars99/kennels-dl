import React from "react";

const LocationCard = (props) => {
    return (
        <div className="card">
            <div className="card-content">  
                <h3>Location:</h3>
                <p>{props.location.name}</p>
            </div>
        </div>
    );
};

export default LocationCard;