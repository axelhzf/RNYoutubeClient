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

import VideoList from "./VideoList";
import youtubeService from "../services/youtubeService";

export default  class SubscriptionsList extends Component {

  componentDidMount() {
    if (!this.props.subscriptions) {
      youtubeService.getSubscriptions();
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
    // todo improve this with this.props.dataSource.getRowData() ?
    const rowData = this.props.subscriptions[parseInt(rowID, 10)];
    const channelId = rowData.snippet.resourceId.channelId;

    this.props.navigator.push({
      title: "Video List",
      component: VideoList,
      leftButtonTitle: 'Back',
      onLeftButtonPress: () => this.props.navigator.pop(),
      passProps: {channelId}
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

function mapStateToProps(state) {
  return {
    subscriptions: state.subscriptions.data.items,
    dataSource: ds.cloneWithRows(state.subscriptions.data.items)
  };
}

export default connect(mapStateToProps)(SubscriptionsList)