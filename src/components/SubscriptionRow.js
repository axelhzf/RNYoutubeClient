import React, {PropTypes, Component, View, Text, StyleSheet, TouchableHighlight, Image,} from 'react-native';

export default class SubscriptionRow extends Component {
  
  static propTypes = {
    onPress: PropTypes.func,
    subscription: PropTypes.object.isRequired
  };
  
  render() {
    const {subscription, onPress} = this.props;
    return (
      <TouchableHighlight onPress={onPress}>
        <View style={styles.row}>
          <Image style={styles.rowImage} source={{uri: subscription.snippet.thumbnails.high.url}}/>
          <Text style={styles.rowText}>{subscription.snippet.title}</Text>
          <Text style={styles.rowDescription} numberOfLines={3}>{subscription.snippet.description}</Text>
        </View>
      </TouchableHighlight>
    )
  }
  
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  rowImage: {
    height: 150
  },
  rowText: {
    color: "#546E7A",
    padding: 10,
    fontWeight: "bold"
  },
  rowDescription: {
    color: "#546E7A",
    padding: 10,
    paddingTop: 0
  }
});