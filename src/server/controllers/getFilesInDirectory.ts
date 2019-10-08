import * as child from "child_process";
import {ExecException} from "child_process";

const getFilesInDirectory = (commitHash: string, repositoryPath: string, filePath: string) => {
    return new Promise((resolve: (contentList: Array<object>) => void, reject: (error: object)=> void) => {
        child.exec(
            `git show ${commitHash}:${'.'.concat(filePath)}`,
            {cwd: repositoryPath},
            (err: ExecException | null, content: string) => {
                if (err) {
                    reject({error: 'Error'});
                    return;
                }
                const contentList: Array<string> = content.split('\n\n')[1].split('\n');
                resolve(contentList.filter(id => id).map(id => {
                        id = id.lastIndexOf('/') > -1 ? id.slice(0, id.lastIndexOf('/')) : id;
                        return {
                            id,
                            path: `/${id}`,
                            isDirectory: !id.match(/\.[\w]/g)
                        }
                    }
                    )
                );
            }
        );
    })
};
export {getFilesInDirectory};