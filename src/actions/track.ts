import * as actionTypes from '../constants/actionTypes';
import * as actionCreatorFactory from 'redux-typescript-actions';
import { Track } from "../components/Stream/contracts/Track";

const actionCreator = actionCreatorFactory.default();
const setTracks = actionCreator<Track[]>(actionTypes.TRACKS_SET);
const playTrack = actionCreator<Track>(actionTypes.TRACK_PLAY);

export { setTracks, playTrack };
