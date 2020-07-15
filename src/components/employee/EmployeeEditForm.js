import React, { useState, useEffect } from "react"
import EmployeeManager from "../../modules/EmployeeManager"
import { firstLetterCase } from "../../modules/Helper"
import "./EmployeeForm.css"
import LocationManager from "../../modules/LocationManager";

const EmployeeEditForm = props => {
  const [employee, setEmployee] = useState({ name: "", position: "", image: "", locationId: 0 });
  const [locations, setLocations] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const updateExistingEmployee = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedEmployee = {
      id: props.match.params.employeeId,
      name: firstLetterCase(employee.name),
      position: firstLetterCase(employee.position),
      locationId: parseInt(employee.locationId),
      image: employee.image
    };

    EmployeeManager.update(editedEmployee)
      .then(() => props.history.push("/employees"))
  }

  useEffect(() => {
    EmployeeManager.get(props.match.params.employeeId)
      .then(employee => {
        LocationManager.getAll()
        .then (locations => {
          setLocations(locations)
          setEmployee(employee);
          setIsLoading(false);
        })
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={employee.name}
            />
            <label htmlFor="name">Employee name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="position"
              value={employee.position}
            />
            <label htmlFor="position">Position</label>
            <select className="form-control" id="locationId" value={employee.locationId} onChange={handleFieldChange}>
              {locations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)}
            </select>
            <label htmlFor="locationId">Location</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingEmployee}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default EmployeeEditForm