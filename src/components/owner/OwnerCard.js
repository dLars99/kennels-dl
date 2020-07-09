import React from "react";

const OwnerCard = (props) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>
                    Owner: <span className="card-ownername">{props.owner.name}</span>
                </h3>
            </div>
        </div>
    );
};

export default OwnerCard;