import * as actions from "../actions/actions";
import update from 'immutability-helper';

export default (state, action) => {
  console.log("action", action.type, action.payload);

  if (action.type === actions.CHECK_LOGIN_SUCCESS) {
    const user = action.payload.user;
    if (!user) {
      return update(state, {user: {state: {$set: "notLoggedIn"}}});
    } else {
      return update(state, {user: {state: {$set: "loggedIn"}, data: {$set: user}}});
    }
  }

  if (action.type === actions.LOGIN_SUCCESS) {
    const user = action.payload.user;
    return update(state, {user: {state: {$set: "loggedIn"}, data: {$set: user}}});
  }

  if (action.type === actions.LOGOUT_SUCCESS) {
    return update(state, {user: {state: {$set: "notLoggedIn"}, data: {$set: undefined}}});
  }

  if (action.type === actions.TABS_SELECT) {
    const tabName = action.payload.tabName;
    return update(state, {tabs: {selected: {$set: tabName}}});
  }

  if (action.type === actions.SUBSCRIPTIONS_SUCCESS) {
    const {subscriptions} = action.payload;
    const newState = update(state, {
      subscriptions: {data: {$set : subscriptions}}
    });
    return newState;
  }

  if (action.type === actions.CHANNEL_VIDEOS_SUCCESS) {
    const {videos, channelId} = action.payload;
    const newState = update(state, {
      channelVideos: {
        [channelId]: {$set : {data: videos}}
      }
    });
    return newState;
  }

  if (action.error) {
    console.trace(action.stack);
  }

  console.log("action without reducer", action.type, action.payload);

  return state;
}