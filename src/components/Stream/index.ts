import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Stream as StreamComponent, StreamProps } from "./presenter";

function mapStateToProps(state: any) {
    const user = state.auth;
    const { tracks, activeTrack } = state.track;
    return {
        user,
        tracks,
        activeTrack,
    } as StreamProps;
}

function mapDispatchToProps(dispatch: any) {
    return {
        onAuth: bindActionCreators(actions.auth, dispatch),
        onPlay: bindActionCreators(actions.playTrack, dispatch),
    } as StreamProps;
}

const Stream = connect(mapStateToProps, mapDispatchToProps)(StreamComponent);

export { Stream };
