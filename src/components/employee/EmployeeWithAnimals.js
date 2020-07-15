import React, { useState, useEffect } from 'react'
import APIManager from '../../modules/APIManager'
import AnimalCard from '../animal/AnimalCard'

const EmployeeWithAnimals = props => {
  const [employee, setEmployee] = useState({name: "", position: "", image: "employee-default.jpg"});
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    //got here now make call to get employee with animal
    APIManager.getWithDependency("employees", props.match.params.employeeId, "animals")
      .then(APIResult => {
          const image = (APIResult.image) ? APIResult.image : "employee-default.jpg"
        setEmployee({
            name: APIResult.name,
            position: APIResult.position,
            locationId: APIResult.locationId,
            image: image
        })
        setAnimals(APIResult.animals);
        setIsLoading(false)
      });
  }, []);

    // Delete animal when discharged
    const deleteAnimal = id => {
    APIManager.delete("animals", id)
        .then(() => APIManager.getWithDependency("employees", props.match.params.employeeId, "animals").then(APIResult => setAnimals(APIResult.animals)))
    }

    const handleDelete = () => {      
        APIManager.getWithDependency("employees", props.match.params.employeeId, "animals")
        .then (results => {
            // Check if animals assigned to deleted employee have been reassigned
            if (results.animals.length > 0) {
                alert("Please reassign all of this employee's animals before deleting.")
            } else {
                // If employee has no animals, then delete
                setIsLoading(true)
                APIManager.delete("employees", props.match.params.employeeId)
                .then(() => APIManager.getAll("employees").then(() => props.history.push("/employees"))
                )
            }
        })    
    }

  return (
    <div className="card">
        <p>Employee: {employee.name}</p>
        <p>Position: {employee.position}</p>
        <picture>
            <img className="detail-image" src={require(`./images/${employee.image}`)} alt="Location" />
        </picture>
        <button type="button" disabled={isLoading} onClick={handleDelete}>Fire</button>
        {animals.map(animal =>
            <AnimalCard
            key={animal.id}
            animal={animal}
            deleteAnimal={deleteAnimal}
            {...props}
            />
        )}
    </div>
  );
};

export default EmployeeWithAnimals;