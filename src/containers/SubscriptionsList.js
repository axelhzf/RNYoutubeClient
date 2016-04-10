import React, {Component, View, StyleSheet, ListView, RecyclerViewBackedScrollView,} from 'react-native';
import {connect} from 'react-redux';
import * as actions from "../actions/actions";

import SubscriptionRow from "../components/SubscriptionRow";
import ListRowSeparator from "../components/ListRowSeparator";
import VideoList from "./VideoList";

export default  class SubscriptionsList extends Component {

  componentDidMount() {
    if (!this.props.subscriptions) {
      this.props.dispatch(actions.fetchSubscriptions())
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.props.dataSource}
          renderRow={(rowData, sectionId, rowId) => <SubscriptionRow subscription={rowData} onPress={() => this.pressRow(rowData)}/>}
          renderScrollComponent={props => <RecyclerViewBackedScrollView style={styles.scrollView} {...props} />}
          renderSeparator={(sectionID, rowID) => <ListRowSeparator key={`${sectionID}-${rowID}`}/>}
          enableEmptySections={true}
        />
      </View>
    )
  }
  
  pressRow(subscription) {
    const channelId = subscription.snippet.resourceId.channelId;
    this.props.navigator.push({
      title: "Video List",
      component: VideoList,
      leftButtonTitle: 'Back',
      onLeftButtonPress: () => this.props.navigator.pop(),
      passProps: {channelId}
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

function mapStateToProps(state) {
  return {
    subscriptions: state.subscriptions.data,
    dataSource: ds.cloneWithRows(state.subscriptions.data || [])
  };
}

export default connect(mapStateToProps)(SubscriptionsList)