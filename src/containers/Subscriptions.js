import React, {Component, NavigatorIOS, StyleSheet} from 'react-native';
import SubscriptionsList from "./SubscriptionsList";

export default class Subscriptions extends Component {

  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
        title: 'Subscriptions',
        component: SubscriptionsList
      }}
      />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }

});