import React, { useState, useEffect } from "react";
import APIManager from "../../modules/APIManager";
import "./AnimalSpotlight.css";

const AnimalSpotlight = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", image: "dog.svg" });

  useEffect(() => {
    APIManager.get("animals", props.animalId).then(animal => {
      
      // Queue default image if no image is in the database
      const image = (animal.image) ? animal.image : "dog.svg"

      setAnimal({
        name: animal.name,
        breed: animal.breed,
        image: image
      });
    });
  }, [props.animalId]);

  return (
    <div className="animal-spotlight">
      <img src={require(`./images/${animal.image}`)} alt="My Dog" />
      <div>
        <h3>{animal.name}</h3>
        <p>{animal.breed}</p>
      </div>
    </div>
  );
};

export default AnimalSpotlight;