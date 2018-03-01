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

// internal modules
import App from './components/app';

// import '../assets/stylesheets/application.scss';

// State and reducers
import coinsReducer from './reducers/coins_reducer';
import redditsReducer from './reducers/reddits_reducer'
import telegrammembersReducer from './reducers/telegrammembers_reducer'
import twitterfollowersReducer from './reducers/twitterfollowers_reducer'
import twittertweetsReducer from './reducers/twittertweets_reducer'
import cmcrawsReducer from './reducers/cmcraws_reducer'
import cmcusdsReducer from './reducers/cmcusds_reducer'

const initialState = {
  coins: []
};

const identityReducer = (state = null) => state;
// 'currentUser': prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
const reducers = combineReducers({
  coins: coinsReducer
});

// Middlewares
const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares)

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>

        <Route path="/" component={App} />

      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);