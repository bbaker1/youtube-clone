import axios from "axios";

const KEY = "AIzaSyDZxaZ18RK0lFVXxiwrmNfrn5i-TWUDgS0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
