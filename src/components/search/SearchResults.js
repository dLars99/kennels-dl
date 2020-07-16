import React, { useState, useEffect } from "react"
import APIManager from "../../modules/APIManager"

const SearchResults = (props) => {

    // Set state
    const [animals, setAnimals] = useState([])
    const [employees, setEmployees] = useState([])
    const [locations, setLocations] = useState([])

    useEffect(() => {
        APIManager.getSearch("animals", props.location.state.search).then(animalMatches => setAnimals(animalMatches))
        APIManager.getSearch("employees", props.location.state.search).then(employeeMatches => setEmployees(employeeMatches))
        APIManager.getSearch("locations", props.location.state.search).then(locationMatches => setLocations(locationMatches))
    }, [props.location.state.search])

    return (
        <div className="results">
            <div className="results-section">
                <h2>Matching Animals</h2>
                {animals.map(animal => {
                    return <>
                    <h3>{animal.name}</h3>
                    <p>{animal.breed}</p>
                    </>
                })}
                <h2>Matching Employees</h2>
                {employees.map(employee => {
                    return <>
                    <h3>{employee.name}</h3>
                    <p>{employee.position}</p>
                    </>
                })}
                <h2>Matching Locations</h2>
                {locations.map(location => {
                    return <>
                    <h3>{location.name}</h3>
                    <p>{location.address}</p>
                    </>
                })}
            </div>
        </div>
    )
}

export default SearchResults