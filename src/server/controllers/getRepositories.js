const fs = require('fs');

const getRepositories = async (absoluteReposPath) => {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(absoluteReposPath)) {
            resolve('Wrong path to repositories folder.');
            return;
        }
        fs.readdir(absoluteReposPath, (err, repositories) => {
            if (err) {
                reject(err);
                return;
            }
            if (typeof start !== 'undefined' && typeof limit !== 'undefined') {
                let reposPerPage = [];
                for (let i = start; i < limit + start; i++) {
                    if (repositories[i] && i < repositories.length) {
                        reposPerPage.push({id: repositories[i]});
                    }
                }
                resolve(reposPerPage);
            } else {
                //Add some timeout to get it more realistic
                setTimeout(function () {
                    resolve(repositories.map(id => ({id})));
                }, 500)

            }
        });
    })
};
module.exports = {getRepositories};