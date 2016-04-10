import React, {Component, View, StyleSheet, ScrollView} from "react-native";
import YouTube from "react-native-youtube";

export default class Video extends Component {
  
  render() {
    const {videoId} = this.props; 
    return (
      <View style={styles.container}>
        <ScrollView>
          <YouTube
            ref="youtubePlayer"
            videoId={videoId} // The YouTube video ID
            play={true}           // control playback of video with true/false
            hidden={false}        // control visiblity of the entire view
            playsInline={true}    // control whether the video should play inline
            //onReady={(e)=>{this.setState({isReady: true})}}
            //onChangeState={(e)=>{this.setState({status: e.state})}}
            //onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
            //onError={(e)=>{this.setState({error: e.error})}}
            //onProgress={(e)=>{this.setState({currentTime: e.currentTime, duration: e.duration})}}
            style={{alignSelf: 'stretch', height: 233, backgroundColor: 'black', marginVertical: 0}}
          />
        </ScrollView>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});