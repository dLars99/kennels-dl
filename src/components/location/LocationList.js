import React, { useState, useEffect } from "react"
import LocationCard from "./LocationCard"
import APIManager from "../../modules/APIManager"

const LocationList = (props) => {

    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return APIManager.getAll("locations").then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        })
    }

    useEffect(() => {
        getLocations()
    }, [])

    const deleteLocation = id => {       
        APIManager.getWithDependency("locations", id, "employees")
        .then (results => {
            // Check if employees assigned to deleted location have been reassigned
            if (results.employees.length > 0) {
                alert("Please reassign or release all of this location's employees before deleting.")
            } else {
                // If location has no employees, then delete
                APIManager.delete("locations", id)
                .then(() => APIManager.getAll("locations").then(setLocations))
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