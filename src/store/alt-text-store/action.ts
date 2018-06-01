export enum AltTextActionTypes {
    GET_ALT_TEXT = "GET_ALT_TEXT",
    SET_ALT_TEXT = "SET_ALT_TEXT" 
}

interface IAltTextAction {
    type: AltTextActionTypes;
    altText: string;
}

export const setAltText = (text: string) => {
    return {
        type: AltTextActionTypes.SET_ALT_TEXT,
        altText: text
    } as IAltTextAction
}