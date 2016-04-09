import React, {Component, View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import * as actions from "../actions/actions";

import Login from "./Login";
import Account from "./Account";

export default class App extends Component {

  componentDidMount() {
    this.props.dispatch(actions.checkLogin());
  }

  render() {
    const {userState} = this.props;

    console.log("render", userState);

    let childView;
    if (userState === "unknown") {
      childView = <Text>Loading...</Text>
    } else if (userState === "notLoggedIn") {
      childView = <Login/>
    } else if (userState === "loggedIn") {
      childView = <Account/>
    }

    console.log(childView);

    return (
      <View style={styles.container}>
        {childView}
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
  }

});

function mapStateToProps(state) {
  return {
    userState: state.user.state
  }
}

export default connect(mapStateToProps)(App)