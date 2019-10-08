const {exec} = require('child_process');

const getCommits = (commitHash: string, repositoryPath: string) => {
    return new Promise((resolve: (commits: Array<string>) => void, reject: (error: object) => void) => {
        exec(
            'git --no-pager log ' +
            commitHash +
            ' --pretty=format:"{@commitHash@: @"%H"@,@message@: @"%s"@,@date@: @"%cd"@}"',
            {cwd: repositoryPath},
            (err: string, logData: string) => {
                if (err) {
                    reject({error: 'Error'});
                    return;
                }
                let commitsArray: Array<string> = logData.replace(/@/g, '"').split('\n');
                resolve(
                    commitsArray.map(commit => {
                        return JSON.parse(`${commit}`);
                    })
                );
            }
        );
    })
};
module.exports = {getCommits};