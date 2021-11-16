import axios from "axios";

const KEY = "AIzaSyAov6DfLY3AqEf7mPK4LB0DBvq_jJ3gHPk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResult: 5,
    key: KEY,
  },
});
