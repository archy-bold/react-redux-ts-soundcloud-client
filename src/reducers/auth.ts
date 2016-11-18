import * as actionTypes from "../constants/actionTypes";
import { Action } from "redux-typescript-actions";
import { ScUser } from "../models/soundcloud";
import * as update from "immutability-helper";

const initialState: ScUser = null;

export function auth(state: ScUser = initialState, action: Action<ScUser>) {
    switch (action.type) {
        case actionTypes.ME_SET:
            return setMe(state, action);
    }
    return state;
}

function setMe(state: ScUser, action: Action<ScUser>) {
    const { payload } = action;
    if (state == null){
        return payload;
    }
    else{
        return update(state, { $merge: payload });
    }
}
