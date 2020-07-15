import React, { useState, useEffect } from 'react';
import APIManager from '../../modules/APIManager';
import './LocationDetail.css'
import EmployeeCard from "../employee/EmployeeCard"

const LocationDetail = props => {
    const [location, setLocation] = useState({name: "", address: "", image: "location-default.jpg" });
    const [employees, setEmployees] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        //go here now to make call to get location with employees
        APIManager.getWithDependency("locations", props.match.params.locationId, "employees")
        .then(APIResult => {
            const image = (APIResult.image) ? APIResult.image : "location-default.jpg"

            setLocation({
                name: APIResult.name,
                address: APIResult.address,
                image: image
            })
            setEmployees(APIResult.employees)
            setIsLoading(false)
        });
    }, []);

    const handleDelete = () => {      
        APIManager.getWithDependency("locations", props.match.params.locationId, "employees")
        .then (results => {
            // Check if employees assigned to deleted location have been reassigned
            if (results.employees.length > 0) {
                alert("Please reassign or release all of this location's employees before deleting.")
            } else {
                // If location has no employees, then delete
                setIsLoading(true)
                APIManager.delete("locations", props.match.params.locationId)
                .then(() => APIManager.getAll().then(() => props.history.push("/locations"))
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