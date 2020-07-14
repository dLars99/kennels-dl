import React, { useState, useEffect } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'
import AnimalCard from '../animal/AnimalCard'

const EmployeeWithAnimals = props => {
  const [employee, setEmployee] = useState({name: "", position: "", image: "employee-default.jpg"});
  const [animals, setAnimals] = useState([]);

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
      });
  }, []);

  return (
    <div className="card">
        <p>Employee: {employee.name}</p>
        <p>Position: {employee.position}</p>
        <picture>
            <img className="detail-image" src={require(`./images/${employee.image}`)} alt="Location" />
        </picture>
        {animals.map(animal =>
            <AnimalCard
            key={animal.id}
            animal={animal}
            {...props}
            />
        )}
    </div>
  );
};

export default EmployeeWithAnimals;