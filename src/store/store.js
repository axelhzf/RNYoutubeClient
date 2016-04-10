import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';

import reducer from '../reducers/reducers';

const initialState = {
  user: {
    state: "unknown", //unknown, loggedIn, notLoggedIn
    data: {}
  },
  tabs: {
    selected: "subscriptions"
  },
  subscriptions: {
    data: undefined
  },
  channelVideos: {
    
  }
};


const enhancer = compose(
  applyMiddleware(thunk),
  devTools()
);

const store = createStore(reducer, initialState, enhancer);

export default store;