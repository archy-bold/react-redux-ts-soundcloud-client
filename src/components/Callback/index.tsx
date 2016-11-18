import * as React from "react";

export class Callback extends React.Component<any, any> {
    componentDidMount() {
        window.setTimeout(opener.SC.connectCallback, 1);
    }

    render() {
        return <div><p>This page should close soon.</p></div>;
    }
}
