import * as actionTypes from "../constants/actionTypes";
import * as update from "immutability-helper";
import { Action } from "redux-typescript-actions";
import { Track } from "../components/Stream/contracts/Track";

type TrackState = {
	tracks: Track[],
	activeTrack: Track,
};

const initialState: TrackState = {
	tracks: [],
	activeTrack: null
};

export function track(state: TrackState = initialState, action: Action<TrackState>) {
    switch (action.type) {
        case actionTypes.TRACKS_SET:
            return setTracks(state, action);
        case actionTypes.TRACK_PLAY:
            return setPlay(state, action);
    }
    return state;
}

function setTracks(state: TrackState, action: Action<TrackState>) {
    const { payload } = action;
    const newPayload = {
    	tracks: payload
    };
    return update(state, { $merge: newPayload });
}

function setPlay(state: TrackState, action: Action<TrackState>) {
    const { payload } = action;
    const newPayload = {
    	activeTrack: payload
    };
    return update(state, { $merge: newPayload });
}
