import React from "react";

const OwnerCard = (props) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>
                    Owner: <span className="card-ownername">{props.owner.name}</span>
                </h3>
                <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Remove</button>
                <button type="button"onClick={() => props.history.push(`/owners/${props.owner.id}/edit`)}>Edit</button>
            </div>
        </div>
    );
};

export default OwnerCard;