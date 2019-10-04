class RepoAPI {
    static getFilesFromRepository(repositoryId) {
        return fetch(`http://localhost:3000/api/repos/${repositoryId}`)
            .then(response => {
                return response.json();
            })
            .catch(err => {
                return err;
            });
    }

    static getDataFromFile(path) {
        return fetch(`http://localhost:3000/api/repos${path}`)
            .then(response => {
                return response.text();
            })
            .catch(err => {
                return err;
            });
    }

    static getFilesFromDirectory(path) {
        return fetch(`http://localhost:3000/api/repos${path}`)
            .then(response => {
                return response.json();
            })
            .catch(err => {
                return err;
            });
    }
}

export default RepoAPI;