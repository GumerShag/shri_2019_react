import {withNaming} from "@bem-react/classname";

export const getClassName = (blockName) => {
    return withNaming({ n: '', e: '__', m: '_', v: '_' })(blockName)
};
