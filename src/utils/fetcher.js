import githubClient from "./githubClient";

export const fetch = ({ key, HTTPmethod = "get", payload, signal }) => {
  let url = key;
  return githubClient({
    method: HTTPmethod,
    url,
    ...(HTTPmethod === "post" || HTTPmethod === "put" || HTTPmethod === "delete"
      ? {
          data: payload,
          signal,
        }
      : {}),
  });
};
