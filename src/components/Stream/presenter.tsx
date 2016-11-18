import * as React from "react";
import * as ReactDOM from "react-dom";

import { CLIENT_ID_2 } from "../../constants/auth";
import { Track } from "./contracts/Track";
import { ScUser } from "../../models/soundcloud";

export interface StreamProps {
    user?: ScUser;
    tracks?: Track[];
    activeTrack?: Track;
    onAuth?: Function;
    onPlay?: Function;
}

interface StreamState {
    playing: boolean;
}

export class Stream extends React.Component<StreamProps, StreamState> {
    constructor() {
        super();
        this.setState({
            playing: false
        });
    }

    componentDidUpdate() {
        const audioElement = ReactDOM.findDOMNode<HTMLAudioElement>(this.refs['audio']);

        if (!audioElement) { return; }

        const { activeTrack } = this.props;

        if (activeTrack) {
            audioElement.play();
        }
        else {
            audioElement.pause();
        }
    }

    render() {
        const { user = null, tracks = [], activeTrack, onAuth, onPlay } = this.props;
        return (
            <div>
                <div>
                    {
                        user !== null ?
                            <div>{user.username}</div> :
                            <button onClick={e => onAuth()} type="button">Login</button>
                    }
                </div>
                <br/>
                <div>
                    {
                        tracks.map((track: Track) => {
                            return (
                                <div key={track.id} className="track">
                                    {track.title}
                                    {
                                        track.stream_url ?
                                            <button type="button" onClick={() => onPlay(track)}>Play</button> :
                                            null
                                    }
                                </div>
                            );
                        })
                    }
                </div>
                {
                    activeTrack ?
                          <audio id="audio" ref="audio" src={`${activeTrack.stream_url}?client_id=${CLIENT_ID_2}`}></audio> :
                          null
                }
            </div>
        );
    }
}
