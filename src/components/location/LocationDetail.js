import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'
import EmployeeCard from "../employee/EmployeeCard"

const LocationDetail = props => {
    const [location, setLocation] = useState({name: "", address: "", image: "location-default.jpg" });
    const [employees, setEmployees] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        //go here now to make call to get location with employees
        LocationManager.getWithEmployees(props.match.params.locationId)
        .then(APIResult => {
            setLocation({
                name: APIResult.name,
                address: APIResult.address,
                image: APIResult.image
            })
            setEmployees(APIResult.employees)
            setIsLoading(false)
        });
    }, []);

    const handleDelete = () => {      
        LocationManager.getWithEmployees(props.match.params.locationId)
        .then (results => {
            // Check if employees assigned to deleted location have been reassigned
            if (results.employees.length > 0) {
                alert("Please reassign or release all of this location's employees before deleting.")
            } else {
                // If location has no employees, then delete
                setIsLoading(true)
                LocationManager.delete(props.match.params.locationId)
                .then(() => LocationManager.getAll().then(() => props.history.push("/locations"))
                )
            }
        })    
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
            {employees.map(employee => 
                <EmployeeCard key={employee.id} employee={employee} {...props} />
            )}
        </div>
        </div>
    );
}

export default LocationDetail;