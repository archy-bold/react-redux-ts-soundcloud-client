import * as SC from "soundcloud";
import * as actionTypes from "../constants/actionTypes";
import * as actionCreatorFactory from 'redux-typescript-actions';
import { ScSession, ScUser, ScActivityCollection, ScActivity } from "../models/soundcloud";
import { setTracks } from "../actions/track";
import { Track, trackFromScTrack } from "../components/Stream/contracts/Track";

const actionCreator = actionCreatorFactory.default();
const setMe = actionCreator<ScUser>(actionTypes.ME_SET);

export { setMe };

export function auth(): Function {
    return function (dispatch: Function) {
        SC.connect().then((session: ScSession) => {
            console.log(session);
            dispatch(fetchMe(session));
            dispatch(fetchStream(session));
        });
    };
};

function fetchMe(session: ScSession): Function {
    return function(dispatch: Function) {
        fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
            .then((response: Response) => response.json())
            .then((data: ScUser) => {
                dispatch(setMe(data));
            });
    }
}

function fetchStream(session: ScSession): Function {
    return function (dispatch: Function) {
        fetch(`//api.soundcloud.com/me/activities?limit=20&offset=0&oauth_token=${session.oauth_token}`)
            .then((response: Response) => response.json())
            .then((data: ScActivityCollection) => {
                console.log(data);

                var tracks: Track[] = [];
                for (var i = 0; i < data.collection.length; ++i) {
                    const activity: ScActivity = data.collection[i];
                    if (activity.origin !== null &&
                        (activity.type == "track" || activity.type == "track-repost")) {
                        var track = trackFromScTrack(activity.origin);
                        tracks.push(track);
                    }
                }

                dispatch(setTracks(tracks));
            });
    };
}
