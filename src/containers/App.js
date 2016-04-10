import React, {Component, View, Text, StyleSheet, TabBarIOS, NavigatorIOS} from 'react-native';
import {connect} from 'react-redux';
import * as actions from "../actions/actions";

import Login from "./Login";
import Account from "./Account";
import SubscriptionsList from "./SubscriptionsList";

class App extends Component {

  componentDidMount() {
    this.props.dispatch(actions.checkLogin());
  }

  isTabSelected(tabName) {
    return this.props.tabsSelected === tabName;
  }

  selectTab(tabName) {
    return this.props.dispatch(actions.selectTab(tabName));
  }
  
  render() {
    const {userState} = this.props;

    let childView;
    if (userState === "unknown") {
      childView = (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    } else if (userState === "notLoggedIn") {
      childView = <Login/>
    } else if (userState === "loggedIn") {
      childView = (
        <TabBarIOS>
          <TabBarIOS.Item
            title="Subscriptions"
            selected={this.isTabSelected("subscriptions")}
            onPress={() => this.selectTab("subscriptions")}
            systemIcon="history">
            <NavigatorIOS
              style={styles.container}
              initialRoute={{ title: 'Subscriptions', component: SubscriptionsList}}
            />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Account"
            selected={this.isTabSelected("account")}
            onPress={() => this.selectTab("account")}
            systemIcon="history">
            <Account/>
          </TabBarIOS.Item>
        </TabBarIOS>
      );
    }

    return childView;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

function mapStateToProps(state) {
  return {
    userState: state.user.state,
    tabsSelected: state.tabs.selected
  }
}

export default connect(mapStateToProps)(App)