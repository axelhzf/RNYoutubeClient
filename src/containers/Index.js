import React, {Component} from 'react-native';
import { Provider } from 'react-redux';
import App from './App';

import store from "../store/store";

export default class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}