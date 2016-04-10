import userService from "./userService";

class YoutubeService {

  async getSubscriptions() {
    const user = userService.getCurrentUser();

    const key = "AIzaSyAdu35gAB8OUXcOvjn0cBDjQQU6LptdhSY";
    const url = `https://www.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&key=${key}`;
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${user.accessToken}`
      }
    });
    let responseJson = await response.json();

    console.log(JSON.stringify(responseJson, null, 2));

    return responseJson.users;
  }

}

export default new YoutubeService();