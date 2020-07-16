import React, { useState, useEffect } from "react"
import APIManager from "../../modules/APIManager"

const SearchResults = (props) => {

    // Set state
    const [animals, setAnimals] = useState([])
    const [employees, setEmployees] = useState([])
    const [locations, setLocations] = useState([])

    useEffect(() => {
        // Remove whitespace from the search term, then retrieve the results from the database
        const searchTerm = props.location.state.search.replace(/\s/g, "%20")
        APIManager.getSearch("animals", searchTerm).then(animalMatches => setAnimals(animalMatches))
        APIManager.getSearch("employees", searchTerm).then(employeeMatches => setEmployees(employeeMatches))
        APIManager.getSearch("locations", searchTerm).then(locationMatches => setLocations(locationMatches))
    }, [props.location.state.search])

    return (
        <div className="results">
            <div className="results-section">
                <h2>Matching Animals</h2>
                {animals.length > 0
                ? animals.map(animal => {
                    return (      
                        <div key={animal.id}>
                        <h3>{animal.name}</h3>
                        <p>{animal.breed}</p>
                        </div>
                    )
                })
                : (<p>No matches found</p>)
                }
                <h2>Matching Employees</h2>
                {employees.length > 0
                ? employees.map(employee => {
                    return (
                        <div key={employee.id}>
                        <h3>{employee.name}</h3>
                        <p>{employee.position}</p>
                        </div>
                    )
                })
                : (<p>No matches found</p>)
                }
                <h2>Matching Locations</h2>
                {locations.length > 0
                ? locations.map(location => {
                    return (
                        <div key={location.id}>
                        <h3>{location.name}</h3>
                        <p>{location.address}</p>
                        </div>
                    )
                })
                : (<p>No matches found</p>)
                }
            </div>
        </div>
    )
}

export default SearchResults