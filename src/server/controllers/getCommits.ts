import * as child from 'child_process'
import {ExecException} from 'child_process'

const getCommits = (commitHash: string, repositoryPath: string) => {
    return new Promise((resolve: (commits: Array<string>) => void, reject: (error: object) => void) => {
        child.exec(
            'git --no-pager log ' +
            commitHash +
            ' --pretty=format:"{@commitHash@: @"%H"@,@message@: @"%s"@,@date@: @"%cd"@}"',
            {cwd: repositoryPath},
            (error: ExecException | null, logData: string) => {
                if (error) {
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