export interface State {
    files: Array<object>;
    content: Array<string>,
    currentView: CurrentViewEnum;
    routes: Array<Route>;

}
export interface StateProps {
    files?: Array<File>;
    content?: Array<string>,
    currentView?: CurrentViewEnum;
    routes?: Array<Route>;
    urlProps: object
}
export interface File {
    path: string;
    name: string;
    id: string;
    isDirectory: boolean;
}

export interface Route {
    path: string;
    name: string;
}
export type CurrentViewEnum = 'table';
export const UPDATE_ROUTES = 'UPDATE_ROUTES';
export interface updateRoutesAction {
    type: typeof UPDATE_ROUTES,
    routes: Array<Route>
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