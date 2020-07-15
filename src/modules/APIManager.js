const remoteURL = "http://localhost:8088"

export default {
    get(source, id) {
        return fetch(`${remoteURL}/${source}/${id}`).then(result => result.json())
    },
    getAll(source) {
        return fetch(`${remoteURL}/${source}`).then(result => result.json())
    },
    getWithDependency(source, id, dependency) {
        return fetch(`${remoteURL}/${source}/${id}?_embed=${dependency}`).then(result => result.json())
    },
    delete(source, id) {
        return fetch(`${remoteURL}/${source}/${id}`, {
            method: "DELETE"
        }).then(result => result.json)
    },
    post(source, newEmployee) {
        return fetch(`${remoteURL}/${source}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }).then(data => data.json())
    },
    update(source, editedLocation) {
        return fetch(`${remoteURL}/${source}/${editedLocation.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedLocation)
        }).then(data => data.json())
    },
    getRandomId(source, currentId) {
        return fetch(`${remoteURL}/${source}`)
            .then(result => result.json())
            .then(items => {
                let randomId = currentId
                while (randomId === currentId) {
                    const randomIndex = Math.floor(Math.random() * items.length);
                    const randomAnimal = items[randomIndex];
                    randomId = randomAnimal.id
                };
                return randomId                
        });
    },
    getSearch(source, searchTerm) {
        return fetch(`${remoteURL}/${source}?q=${searchTerm}`).then(result => result.json())
    }
}
