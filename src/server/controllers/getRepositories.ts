import * as fs from 'fs';

const getRepositories = async (absoluteReposPath: string, start: number, limit: number) => {
    return new Promise((resolve: (content: Array<object>) => void, reject: (error: object) => void)=> {
        if (!fs.existsSync(absoluteReposPath)) {
            resolve([{error: 'Wrong path to repositories folder.'}]);
            return;
        }
        fs.readdir(absoluteReposPath, (err: NodeJS.ErrnoException | null, repositories: Array<string>) => {
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
export {getRepositories};