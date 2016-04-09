import React, {Component} from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from '../reducers/index';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

export default class Index extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
  
}