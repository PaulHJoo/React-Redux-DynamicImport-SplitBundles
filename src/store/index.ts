import { ITextState } from "./text-store/state";
import { IAltTextState } from "./alt-text-store/state";

import { textReducer } from "./text-store/reducer";
import { altTextReducer } from "./alt-text-store/reducer";

export interface IState {
    stateText: ITextState;
    stateAltText: IAltTextState;
}

export const reducers = {
    stateText: textReducer,
    stateAltText: altTextReducer
}