// import { encode } from "iconv-lite";

const BASE_URL = "http://localhost:3456";
const defaultFetchOpts = {};
const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNjg5YjE4NTAtYTg4ZC0xMWU4LTgwN2ItY2ZiMzIzOTU2MjQwIiwiaWF0IjoxNTM1MjE4NjA5fQ.UiNxomAqOIn4Y8tThaYwfZw4kPhCOynZFcI5G4ql-GY";

const queryParams = params =>
  Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join("&");

const completeUrl = (path, query = {}) => {
  let url = `${BASE_URL}${path}`;

  if (Object.keys(query).length > 0) {
    url += (url.indexOf("?") === -1 ? "?" : "&") + queryParams(query);
  }
  return url;
};

const makeFetchOpts = (opts = {}) => {
  const userHeaders = opts.headers || {};
  delete opts.headers;
  const headers = new Headers({
    ...defaultHeaders,
    ...userHeaders
  });

  return { ...defaultFetchOpts, ...opts, headers };
};

export const makeFetch = (path, opts = {}) => {
  const url = completeUrl(path, opts.query);
  const fetchOpts = makeFetchOpts(opts);
  return fetch(url, fetchOpts)
    .then(resp => {
      if (resp.ok) return resp.json();
      // const err = resp.stausText;
      // throw new Error(err);
    })
    .catch(error => {
      console.log(error);
    });
};
export const makeAuthFetch = (path, opts = {}) => {
  const fetchOpts = {
    ...opts,
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`
    }
  };

  return makeFetch(path, fetchOpts);
};
