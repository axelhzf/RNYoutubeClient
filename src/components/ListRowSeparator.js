import React, {PropTypes, Component, View, Text, StyleSheet, TouchableHighlight, Image,} from 'react-native';

export default class ListRowSeparator extends Component {

  render() {
    return <View style={styles.separator}/>
  }

}

const styles = StyleSheet.create({
  separator: {
    height: 30,
    backgroundColor: "#F5F5F5"
  }
});