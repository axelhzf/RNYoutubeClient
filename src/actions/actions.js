import userService from "../services/userService";

import youtubeService from "../services/youtubeService";

export const CHECK_LOGIN_REQUEST = "CHECK_LOGIN_REQUEST";
export const CHECK_LOGIN_SUCCESS = "CHECK_LOGIN_SUCCESS";
export const CHECK_LOGIN_ERROR = "CHECK_LOGIN_ERROR";

export const LOGIN_REQUEST = "CHECK_LOGIN_REQUEST";
export const LOGIN_SUCCESS = "CHECK_LOGIN_SUCCESS";
export const LOGIN_ERROR = "CHECK_LOGIN_ERROR";

export const LOGOUT_REQUEST = "CHECK_LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "CHECK_LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "CHECK_LOGOUT_ERROR";

export const TABS_SELECT = "TABS_SELECT";

export const SUBSCRIPTIONS_REQUEST = "SUBSCRIPTIONS_REQUEST";
export const SUBSCRIPTIONS_SUCCESS = "SUBSCRIPTIONS_SUCCESS";
export const SUBSCRIPTIONS_ERROR = "SUBSCRIPTIONS_ERROR";

export const CHANNEL_VIDEOS_REQUEST = "CHANNEL_VIDEOS_REQUEST";
export const CHANNEL_VIDEOS_SUCCESS = "CHANNEL_VIDEOS_SUCCESS";
export const CHANNEL_VIDEOS_ERROR = "CHANNEL_VIDEOS_ERROR";

export function checkLogin() {
  return (dispatch) => {
    dispatch({type: CHECK_LOGIN_REQUEST});
    userService.requestCurrentUser()
      .then(user => dispatch({type: CHECK_LOGIN_SUCCESS, payload: {user}}))
      .catch((e) => dispatch({type: CHECK_LOGIN_ERROR, error: true, payload: e}));
  }
}

export function login() {
  return (dispatch) => {
    dispatch({type: LOGIN_REQUEST});
    userService.login()
      .then(user => dispatch({type: LOGIN_SUCCESS, payload: {user}}))
      .catch((e) => dispatch({type: LOGIN_ERROR, error: true, payload: e}));
  }
}

export function logout() {
  return async (dispatch) => {
    try {
      dispatch({type: LOGOUT_REQUEST});
      await userService.logout();
      dispatch({type: LOGOUT_SUCCESS})
    } catch(e) {
      dispatch({type: LOGOUT_ERROR, error: true, payload: e})
    }
  }
}

export function selectTab(tabName) {
  return {
    type: TABS_SELECT,
    payload: {tabName}
  }
}

export function fetchSubscriptions() {
  return async(dispatch) => {
    try {
      dispatch({type: SUBSCRIPTIONS_REQUEST});
      const subscriptions = await youtubeService.getSubscriptions();
      dispatch({type: SUBSCRIPTIONS_SUCCESS, payload: {subscriptions}});
    } catch (e) {
      dispatch({type: SUBSCRIPTIONS_ERROR, error: true, payload: e});
    }
  };  
}

export function fetchChannelVideos(channelId) {
  return async(dispatch) => {
    try {
      dispatch({type: CHANNEL_VIDEOS_REQUEST});
      const videos = await youtubeService.getVideosFromChannel(channelId);
      dispatch({type: CHANNEL_VIDEOS_SUCCESS, payload: {channelId, videos}});
    } catch (e) {
      dispatch({type: CHANNEL_VIDEOS_ERROR, error: true, payload: e});
    }
  };
}