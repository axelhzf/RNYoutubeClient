import React, {Component, StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import userService from "../services/userService";
import {connect} from "react-redux";

import * as actions from "../actions/actions";

class Account extends Component {

  logout() {
    this.props.dispatch(actions.logout());
  }

  render() {
    const {user} = this.props;
    return (
      <View style={styles.container}>
        <Text>User: {user.email}</Text>
        <Text>Name: {user.name}</Text>
        <Image
          style={styles.userImage}
          source={{uri: user.photo}}
        />
        <TouchableHighlight onPress={this.logout.bind(this)}>
          <Text style={styles.button}>Logout</Text>
        </TouchableHighlight>
      </View>
    );

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
    user: state.user.data
  }
}

export default connect(mapStateToProps)(Account);