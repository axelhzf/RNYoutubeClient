import React, {PropTypes, Component, View, Text, StyleSheet, TouchableHighlight, Image,} from 'react-native';

export default class VideoRow extends Component {
  
  static propTypes = {
    onPress: PropTypes.func,
    video: PropTypes.object.isRequired
  };
  
  render() {
    const {video, onPress} = this.props;
    return (
      <TouchableHighlight onPress={onPress}>
        <View style={styles.row}>
          <Image style={styles.rowImage} source={{uri: video.snippet.thumbnails.high.url}}/>
          <Text style={styles.rowText}>{video.snippet.title}</Text>
          <Text style={styles.rowDescription} numberOfLines={3}>{video.snippet.description}</Text>
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