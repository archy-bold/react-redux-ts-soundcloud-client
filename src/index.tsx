import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { Provider } from "react-redux";
import * as SC from "soundcloud";

import { App } from './components/App';
import { Callback } from './components/Callback';
import { Track }  from "./components/Stream/contracts/Track";
import { Stream } from "./components/Stream";
import * as actions from './actions';
import { configureStore } from './stores/configureStore';
import { CLIENT_ID, REDIRECT_URI } from './constants/auth';

SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });

const tracks: Track[] = [
    {
        id: 1,
        title: "Where is my Mind?"
    },
    {
        id: 2,
        title: "Let's Dance"
    }
];

const store = configureStore({});
store.dispatch(actions.setTracks(tracks));
store.dispatch(actions.setTracks(tracks));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Stream} />
                <Route path="/" component={Stream} />
                <Route path="/callback" component={Callback} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById("app")
);
