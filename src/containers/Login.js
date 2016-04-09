import React, {Component, StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import {GoogleSigninButton} from 'react-native-google-signin';
import {connect} from "react-redux";

import * as actions from "../actions/actions";

class Login extends Component {

  signIn() {
    this.props.dispatch(actions.login());
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <GoogleSigninButton
          style={styles.signUpButton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={this.signIn.bind(this)}/>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  signUpButton: {
    width: 312,
    height: 48,
    backgroundColor: "#fff"
  },

  userImage: {
    width: 120,
    height: 120
  },

  button: {
    backgroundColor: "red",
    color: "white"
  }

});

function mapStateToProps(state) {
  return {
    userState: state.user.state
  }
}

export default connect(mapStateToProps)(Login);