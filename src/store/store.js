import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

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


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer, initialState);

export default store;