import React, {Component, View, StyleSheet, ListView, RecyclerViewBackedScrollView} from 'react-native';
import {connect} from 'react-redux';
import Video from "./Video";
import * as actions from "../actions/actions";
import VideoRow from "../components/VideoRow";
import ListRowSeparator from "../components/ListRowSeparator";

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
          renderRow={(rowData) => <VideoRow video={rowData} onPress={() =>this.pressRow(rowData)}/>}
          renderScrollComponent={props => <RecyclerViewBackedScrollView style={styles.scrollView} {...props} />}
          renderSeparator={(sectionID, rowID) => <ListRowSeparator key={`${sectionID}-${rowID}`}/>}
          enableEmptySections={true}
        />
      </View>
    )
  }
  
  pressRow(video) {
    const videoId = video.snippet.resourceId.videoId;
    this.props.navigator.push({
      title: "Video",
      component: Video,
      leftButtonTitle: 'Back',
      onLeftButtonPress: () => this.props.navigator.pop(),
      passProps: {videoId}
    });
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
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