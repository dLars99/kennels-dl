import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

const LocationDetail = props => {
    const [location, setLocation] = useState({ name: "", address: "", image: "location-default.jpg" });
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        //get(id) from LocationManager and hang on to the data; put it into state
        LocationManager.get(props.locationId)
        .then(location => {
            setLocation({
                name: location.name,
                address: location.address,
                image: location.image
            });
            setIsLoading(false)
        });
    }, [props.locationId]);

    const handleDelete = () => {
        setIsLoading(true)
        LocationManager.delete(props.locationId).then(() => props.history.push("/locations"))
    }

    return (
        <div className="card">
        <div className="card-content">
            <picture>
                <img className="detail-image" src={require(`./images/${location.image}`)} alt="My Dog" />
            </picture>
            <h3>Location: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
            <p>Address: {location.address}</p>
            <button type="button" disabled={isLoading} onClick={handleDelete}>Close</button>
        </div>
        </div>
    );
}

export default LocationDetail;