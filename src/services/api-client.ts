import axios from "axios";

export default axios.create({
  //   baseURL: "https://api.rawg.io/api/games/{game_pk}/additions",
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f6d2855055974b18911c0bc04f87fc58",
  },
});
