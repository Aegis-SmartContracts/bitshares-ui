import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Router, browserHistory, hashHistory } from "react-router/es";
import {ChainConfig} from "bitsharesjs-ws";

ChainConfig.address_prefix = "AGS";
ChainConfig.core_asset = "AGS";
ChainConfig.networks.AEgis = {
    address_prefix: "AGS",
    chain_id: "a1f1444cc2cca678d452e9cdb7daefa4a1b2567a5f0aa09eaa846d759f827e3e"
};

/*
* Routes-dev is only needed for react hot reload, as this does not work with
* the async routes defined in Routes.jsx. Any changes to the routes must be kept
* synchronized between the two files
*/
import routes from "./Routes";

require("./components/Utility/Prototypes"); // Adds a .equals method to Array for use in shouldComponentUpdate

/*
* Electron does not support browserHistory, so we need to use hashHistory.
* The same is true for servers without configuration options, such as Github Pages
*/
const history = __HASH_HISTORY__ ? hashHistory : browserHistory;

const rootEl = document.getElementById("content");
const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Router history={history} routes={routes} />
        </AppContainer>,
        rootEl
    );
};
render();
