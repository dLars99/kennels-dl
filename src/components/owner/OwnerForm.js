import React, { useState } from 'react';
import APIManager from '../../modules/APIManager';
import { firstLetterCase } from "../../modules/Helper"
import './OwnerForm.css'

const OwnerForm = props => {
  const [owner, setOwner] = useState({ name: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = firstLetterCase(evt.target.value);
    setOwner(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create Owner object, invoke the APIManager post method, 
  and redirect to the full Owner list*/
  const constructNewOwner = evt => {
    evt.preventDefault();
    if (owner.name === "" || owner.breed === "") {
      window.alert("Please input an Owner name and breed");
    } else {
      setIsLoading(true);
      // Create the Owner and redirect user to Owner list
      APIManager.post("owners", owner)
        .then(() => props.history.push("/owners"));
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
              placeholder="Owner name"
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewOwner}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default OwnerForm