export enum TextActionTypes {
    GET_TEXT = "GET_TEXT",
    SET_TEXT = "SET_TEXT"
};

interface ITextAction {
    type: TextActionTypes;
    text: string;
}

export const setText = (text: string) => {
    return {
        type: TextActionTypes.SET_TEXT,
        text: text
    } as ITextAction
}