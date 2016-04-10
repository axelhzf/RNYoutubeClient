import {GoogleSignin} from 'react-native-google-signin';
import store from "../store/store";

GoogleSignin.configure({
  scopes: [
    "https://www.googleapis.com/auth/youtube.readonly"
  ],
  iosClientId: "963308241853-i36keluva4lcl8li55nvtk27fjkn1alh.apps.googleusercontent.com"
});

class UserService {

  getCurrentUser() {
    return store.getState().user.data;
  }

  requestCurrentUser() {
    return GoogleSignin.currentUserAsync();
  }

  login() {
    return GoogleSignin.signIn();
  }

  logout() {
    return GoogleSignin.revokeAccess().then(_ => GoogleSignin.signOut())
  }
  
}

export default new UserService();