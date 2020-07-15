import React, { useState, useEffect } from "react";
import AnimalSpotlight from "../animal/AnimalSpotlight";
import APIManager from "../../modules/APIManager";

const Home = () => {
    const [spotlightId, setSpotlightId] = useState(0);

    const refreshSpotlightAnimal = () => {
        APIManager.getRandomId("animals", spotlightId).then(setSpotlightId);
    };

    useEffect(() => {
        refreshSpotlightAnimal();
    }, []);

    return (
        <>
            <h2>Student Kennels
                <br />
                <small>Loving Care When You're Not There</small>
            </h2>
        <address>
            Visit Us at the Nashville North Location
            <br />
            500 Puppy Way
        </address>
        <h1>Animal Spotlight</h1>
        <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
        {
            spotlightId && <AnimalSpotlight animalId={spotlightId} />
        }
        </>
    );
};

export default Home;