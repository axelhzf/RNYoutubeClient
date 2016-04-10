import userService from "./userService";

const key = "AIzaSyAdu35gAB8OUXcOvjn0cBDjQQU6LptdhSY";

class YoutubeService {

  async getSubscriptions() {
    const user = userService.getCurrentUser();

    const url = `https://www.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&key=${key}`;
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${user.accessToken}`
      }
    });
    let responseJson = await response.json();
    return responseJson.items;
  }

  async getVideosFromChannel(channelId) {
    const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&id=${channelId}&key=${key}`;
    const channelResponse = await fetch(channelUrl);
    const channelResponseJson = await channelResponse.json();

    const uploadPlayListId = channelResponseJson.items[0].contentDetails.relatedPlaylists.uploads;

    const playlistItemsUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadPlayListId}&key=${key}`;
    const playlistItemsResponse = await fetch(playlistItemsUrl);
    const playlistItemsResponseJson = await playlistItemsResponse.json();

    console.log(playlistItemsResponseJson.items);
    
    return playlistItemsResponseJson.items;
  }


}

export default new YoutubeService();