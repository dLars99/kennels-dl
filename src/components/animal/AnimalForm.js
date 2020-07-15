import React, { useState, useEffect } from 'react';
import APIManager from '../../modules/APIManager';
import { firstLetterCase } from "../../modules/Helper"
import './AnimalForm.css'

const AnimalForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", employeeId: "" });
  const [employees, setEmployees] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = firstLetterCase(evt.target.value);
    setAnimal(stateToChange);
  };

  useEffect(() => {
    APIManager.getAll("employees")
    .then(employees => {
      setEmployees(employees)
      setIsLoading(false)
    })
  }, [])

  /*  Local method for validation, set loadingStatus, create animal object, invoke the APIManager post method, 
  and redirect to the full animal list*/
  const constructNewAnimal = evt => {
    evt.preventDefault();
    if (animal.name === "" || animal.breed === "") {
      window.alert("Please input an animal name and breed");
    } else {
      setIsLoading(true);
      const newAnimal = {
        name: animal.name,
        breed: animal.breed,
        employeeId: parseInt(animal.employeeId)
      }
      // Create the animal and redirect user to animal list
      APIManager.post("animals", newAnimal)
        .then(() => props.history.push("/animals"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Animal name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="breed"
              placeholder="Breed"
            />
            <label htmlFor="breed">Breed</label>
            <select className="form-control" id="employeeId" value={animal.employeeId} onChange={handleFieldChange}>
              {employees.map(employee => <option key={employee.id} value={employee.id}>{employee.name}</option>)}
            </select>
            <label htmlFor="employeeId">Employee</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewAnimal}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AnimalForm