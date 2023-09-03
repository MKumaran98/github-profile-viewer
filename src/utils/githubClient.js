import Axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

const githubClient = applyCaseMiddleware(
  Axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    auth: process.env.REACT_APP_GIT_HUB_TOKEN,
  })
);
export default githubClient;
