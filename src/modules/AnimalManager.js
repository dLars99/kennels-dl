const remoteURL = "http://localhost:8088"

export default {
    get(id) {
        return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/animals`).then(result => result.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/animals/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },
    post(newAnimal) {
        return fetch(`${remoteURL}/animals`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAnimal)
        }).then(data => data.json())
    },
    update(editedAnimal) {
        return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedAnimal)
        }).then(data => data.json())
    },
    getRandomId(currentId) {
        return fetch(`${remoteURL}/animals`)
            .then(result => result.json())
            .then(animals => {
                const randomizer = (currentId) => {
                    const randomIndex = Math.floor(Math.random() * animals.length);
                    if (currentId !== randomIndex) {
                        const randomAnimal = animals[randomIndex];
                        return randomAnimal.id;
                    } else {
                        randomizer(currentId)
                    }
                }
            return randomizer(currentId)
        });
      }
}