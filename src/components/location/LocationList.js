import React, { useState, useEffect } from "react"
import LocationCard from "./LocationCard"
import LocationManager from "../../modules/LocationManager"

const LocationList = (props) => {

    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return LocationManager.getAll().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        })
    }

    useEffect(() => {
        getLocations()
    }, [])

    const deleteLocation = id => {       
        LocationManager.getWithEmployees(id)
        .then (results => {
            // Check if employees assigned to deleted location have been reassigned
            if (results.employees.length > 0) {
                alert("Please reassign or release all of this location's employees before deleting.")
            } else {
                // If location has no employees, then delete
                LocationManager.delete(id)
                .then(() => LocationManager.getAll().then(setLocations))
            }
        })    
    }

    return (
        <>
            <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {props.history.push("/locations/new")}}>
                Open Location
            </button>
            </section>
        <div className="container-cards">
            {locations.map(location => <LocationCard key={location.id} thisLocation={location} deleteLocation={deleteLocation} {...props} />)}
        </div>
        </>
    )
}

export default LocationList