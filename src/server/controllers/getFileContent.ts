import * as child from "child_process";
import {ExecException} from "child_process";


const getFileContent = (commitHash: string, repositoryPath: string, filePath: string) => {
    return new Promise((resolve: (content: Array<string>) => void, reject: (error: object) => void) => {
        child.exec(
            `git show ${commitHash}:${'.'.concat(filePath)}`,
            {cwd: repositoryPath},
            (err: ExecException | null, content: string) => {
                if (err) {
                    reject({error: 'Error'});
                    return;
                }
               resolve(content.split('\n'));
            }
        );
    })
};
export {getFileContent};