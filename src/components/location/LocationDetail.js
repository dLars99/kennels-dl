import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'
import EmployeeCard from "../employee/EmployeeCard"

const LocationDetail = props => {
    const [location, setLocation] = useState({});
    const [employees, setEmployees] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        //go here now to make call to get location with employees
        LocationManager.getWithEmployees(props.match.params.locationId)
        .then(APIResult => {
            setLocation(APIResult);
            setEmployees(APIResult.employees)
            setIsLoading(false)
        });
    }, []);

    const handleDelete = () => {
        setIsLoading(true)
        LocationManager.delete(props.locationId).then(() => props.history.push("/locations"))
    }

    return (
        <div className="card">
        <div className="card-content">
            <picture>
                <img className="detail-image" src={require(`./images/${location.image}`)} alt="Location" />
            </picture>
            <h3>Location: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
            <p>Address: {location.address}</p>
            <button type="button" disabled={isLoading} onClick={handleDelete}>Close</button>
            <EmployeeCard key={employees.id} employees={employees} {...props} />
        </div>
        </div>
    );
}

export default LocationDetail;