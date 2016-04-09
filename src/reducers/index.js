import * as actions from "../actions/actions";
import update from 'immutability-helper';

const initialState = {
  user: {
    state: "unknown", //unknown, loggedIn, notLoggedIn
    data: {}
  }
};

export default (state = initialState, action) => {
  console.log("action", action.type, action.payload);

  if (action.type === actions.CHECK_LOGIN_SUCCESS) {
    const user = action.payload.user;
    if (!user) {
      return update(state, {user: {state: {$set: "notLoggedIn"}}});
    } else {
      return update(state, {user: {state: {$set: "loggedIn"}, data: {$set: user}}});
    }
  } else if (action.type === actions.LOGIN_SUCCESS) {
    console.log("login success");
    const user = actions.payload.user;
    return update(state, {user: {state: {$set: "loggedIn"}, data: {$set: user}}});
  } else if(action.type === actions.LOGOUT_SUCCESS) {
    return update(state, {user: {state: {$set: "notLoggedIn"}, data: {$set: undefined}}});
  }

  return state;
}