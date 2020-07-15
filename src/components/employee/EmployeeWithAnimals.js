import React, { useState, useEffect } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'
import AnimalCard from '../animal/AnimalCard'
import AnimalManager from '../../modules/AnimalManager'

const EmployeeWithAnimals = props => {
  const [employee, setEmployee] = useState({name: "", position: "", image: "employee-default.jpg"});
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    //got here now make call to get employee with animal
    EmployeeManager.getWithAnimals(props.match.params.employeeId)
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
    AnimalManager.delete(id)
        .then(() => EmployeeManager.getWithAnimals(props.match.params.employeeId).then(APIResult => setAnimals(APIResult.animals)))
    }

    const handleDelete = () => {      
        EmployeeManager.getWithAnimals(props.match.params.employeeId)
        .then (results => {
            // Check if animals assigned to deleted employee have been reassigned
            if (results.animals.length > 0) {
                alert("Please reassign all of this employee's animals before deleting.")
            } else {
                // If employee has no animals, then delete
                setIsLoading(true)
                EmployeeManager.delete(props.match.params.employeeId)
                .then(() => EmployeeManager.getAll().then(() => props.history.push("/employees"))
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