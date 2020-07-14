import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'

const AnimalDetail = props => {
    const [animal, setAnimal] = useState({ name: "", breed: "", image: "dog.svg" });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //get(id) from AnimalManager and hang on to the data; put it into state
        AnimalManager.get(props.animalId)
        .then(animal => {
            if (animal.id) {
                const image = (animal.image) ? animal.image : "dog.svg"
                setAnimal({
                    name: animal.name,
                    breed: animal.breed,
                    image: image
                });
                setIsLoading(false);
            } else {
                props.history.push("/animals")
            }
        });
    }, [props.animalId]);

    const handleDelete = () => {
        setIsLoading(true);
        AnimalManager.delete(props.animalId).then(() => props.history.push("/animals"))
    }

    return (
        <div className="card">
        <div className="card-content">
            <picture>
                <img className="detail-image" src={require(`./images/${animal.image}`)} alt="My Dog" />
            </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{animal.name}</span></h3>
            <p>Breed: {animal.breed}</p>
            <button type="button" disabled={isLoading} onClick={handleDelete}>Discharge</button>
        </div>
        </div>
    );
}

export default AnimalDetail;