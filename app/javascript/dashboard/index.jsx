 // external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// routing
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import { createHistory as history } from 'history';

// import createHistory from 'history/createBrowserHistory'
// const history = createHistory()

// internal modules
import App from './components/app';
import CoinsShow from './containers/coins_show';
import CoinsIndex from './containers/coins_index';

// import '../assets/stylesheets/application.scss';

// State and reducers
import coinsReducer from './reducers/coins_reducer';
import redditSubscribersReducer from './reducers/redditsubscribers_reducer';
import redditActiveaccountsReducer from './reducers/redditactiveaccounts_reducer';
import telegrammembersReducer from './reducers/telegrammembers_reducer';
import twitterfollowersReducer from './reducers/twitterfollowers_reducer';
import twittertweetsReducer from './reducers/twittertweets_reducer';
import cmcrawsReducer from './reducers/cmcraws_reducer';
import cmcusdsReducer from './reducers/cmcusds_reducer';
import pricebtcReducer from './reducers/pricebtc_reducer';

import priceusdReducer from './reducers/priceusd_reducer';
import h24volumeReducer from './reducers/h24volume_reducer';
import marketcapReducer from './reducers/marketcap_reducer';
import mycoinsReducer from './reducers/mycoins_reducer';

const initialState = {
  coins: [],
  mycoins: [],
  redditsubscribers: [],
  redditactiveaccounts: [],
  telegrammembers: [],
  twitterfollowers: [],
  twittertweets: [],
  cmcraws: [],
  cmcusds: [],
  pricebtc: [],
  priceusd: [],
  h24volume: [],
  marketcap: [],
  currentUser: root.dataset.id
};

const identityReducer = (state = null) => state;
// 'currentUser': prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
const reducers = combineReducers({
  coins: coinsReducer,
  mycoins: mycoinsReducer,
  redditsubscribers: redditSubscribersReducer,
  redditactiveaccounts: redditActiveaccountsReducer,
  telegrammembers: telegrammembersReducer,
  twitterfollowers: twitterfollowersReducer,
  twittertweets: twittertweetsReducer,
  cmcraws: cmcrawsReducer,
  cmcusds: cmcusdsReducer,
  pricebtc: pricebtcReducer,
  priceusd: priceusdReducer,
  h24volume: h24volumeReducer,
  marketcap: marketcapReducer,
  currentUser: identityReducer
});

// Middlewares
const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares)

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/coins/me/:userid" exact component={CoinsIndex} />
        <Route path="/coins" exact component={CoinsIndex} />
        <Route path="/coins/:id" exact component={CoinsShow} />
        <Route path="/coins/:id/:type" exact component={CoinsShow} />
        <Route path="/coins/:id/:type/:channel/:metric" exact component={CoinsShow} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
