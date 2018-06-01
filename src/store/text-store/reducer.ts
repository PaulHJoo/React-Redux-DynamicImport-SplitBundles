import { Reducer } from "redux";
import { TextActionTypes } from "./action";
import { ITextState } from "./state";

const initialState: ITextState = {
    text: "Initial State"
}

export const textReducer: Reducer<ITextState> = (state: ITextState = initialState, action) => {
    // console.log(state);
    switch (action.type) {
        case TextActionTypes.SET_TEXT:
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
}