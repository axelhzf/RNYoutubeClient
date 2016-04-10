import React, {
  Component,
  View,
  Text,
  StyleSheet,
  ListView,
  RecyclerViewBackedScrollView,
  TouchableHighlight,
  Image,
  NavigatorIOS
} from 'react-native';
import {connect} from 'react-redux';
import Video from "./Video";
import * as actions from "../actions/actions";

export default  class SubscriptionsList extends Component {

  componentDidMount() {
    if (this.props.videos === undefined) {
      const {channelId} = this.props;
      this.props.dispatch(actions.fetchChannelVideos(channelId));
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.props.dataSource}
          renderRow={this.renderRow.bind(this)}
          renderScrollComponent={props => <RecyclerViewBackedScrollView style={styles.scrollView} {...props} />}
          renderSeparator={this.renderSeparator.bind(this)}
          enableEmptySections={true}
        />
      </View>
    )
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight onPress={() => this.pressRow(sectionID, rowID)}>
        <View style={styles.row}>
          <Image  style={styles.rowImage} source={{uri: rowData.snippet.thumbnails.high.url}}/>
          <Text style={styles.rowText}>{rowData.snippet.title}</Text>
          <Text style={styles.rowDescription} numberOfLines={3}>{rowData.snippet.description}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  pressRow(sectionID, rowID) {
    const rowData = this.props.videos[parseInt(rowID, 10)];
    const videoId = rowData.snippet.resourceId.videoId;

    this.props.navigator.push({
      title: "Video",
      component: Video,
      leftButtonTitle: 'Back',
      onLeftButtonPress: () => this.props.navigator.pop(),
      passProps: {videoId}
    });
  }

  renderSeparator(sectionID, rowID) {
    return <View key={`${sectionID}-${rowID}`} style={styles.separator}/>
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    backgroundColor: "#F5F5F5"
  },
  row: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  rowImage: {
    //width: 300,
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
  },
  separator: {
    height: 30,
    backgroundColor: "#F5F5F5"
  }
});

var ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1.id !== r2.id
});

function mapStateToProps(state, ownProps) {
  const {channelId} = ownProps;
  const channelVideos = state.channelVideos[channelId];
  let videos;
  if (channelVideos) {
    videos = channelVideos.data
  }
  return {
    videos,
    dataSource: ds.cloneWithRows(videos || [])
  };
}

export default connect(mapStateToProps)(SubscriptionsList)