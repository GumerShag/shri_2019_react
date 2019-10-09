import {withNaming} from "@bem-react/classname";

export const getClassName = (blockName: string) => {
    return withNaming({ n: '', e: '__', m: '_', v: '_' })(blockName)
};
