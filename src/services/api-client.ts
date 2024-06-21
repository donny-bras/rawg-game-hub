import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "83ab1d3b6d324e578860899367c5526d",
  },
});
