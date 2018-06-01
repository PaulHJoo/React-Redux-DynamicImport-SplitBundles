import { AltTextActionTypes } from "./action";

const initialState = {
    altText: "Initial Alt State",
    text: "Text in Alt Text State"
}

export const altTextReducer = (state = initialState, action) => {
    switch(action.type) {
        case AltTextActionTypes.SET_ALT_TEXT:
            return {
                ...state,
                altText: action.altText
            }

        default:
            return {
                ...state
            }
    }
}