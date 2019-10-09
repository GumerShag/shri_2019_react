export const UPDATE_ROUTES = 'UPDATE_ROUTES';
export interface updateRoutesAction {
    type: typeof UPDATE_ROUTES,
    routes: Array<string>
}
export const SET_CONTENT = 'SET_CONTENT';
export interface setContentToViewerAction {
    type: typeof SET_CONTENT,
    content: Array<string>
}
export const SET_FILES = 'SET_FILES';
export interface setFilesListToTableAction {
    type: typeof SET_FILES,
    files: Array<object>
}
export type ActionType = updateRoutesAction | setContentToViewerAction | setFilesListToTableAction