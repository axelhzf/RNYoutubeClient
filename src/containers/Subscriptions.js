import React, {
  Component,
  View,
  Text,
  StyleSheet,
  ListView,
  RecyclerViewBackedScrollView,
  TouchableHighlight,
  Image
} from 'react-native';
import {connect} from 'react-redux';

import youtubeService from "../services/youtubeService";

export default  class Subscriptions extends Component {

  componentDidMount() {
    if (!this.props.subscriptions) {
      youtubeService.getSubscriptions();
    }
    console.log(this.props.subscriptions);
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
      <TouchableHighlight onPress={() => this.pressRow(rowID)}>
        <View style={styles.row}>
          <Image  style={styles.rowImage} source={{uri: rowData.snippet.thumbnails.high.url}}/>
          <Text style={styles.rowText}>{rowData.snippet.title}</Text>
          <Text style={styles.rowDescription} numberOfLines={3}>{rowData.snippet.description}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  pressRow(rowID) {

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
    dataSource: ds.cloneWithRows(state.subscriptions.data.items)
  };
}

export default connect(mapStateToProps)(Subscriptions)