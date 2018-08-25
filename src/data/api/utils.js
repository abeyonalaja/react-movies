import { encode } from "iconv-lite";

const BASE_URL = "http://localhost:3456";
const defaultFetchOpts = {};
const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMDMzOTQ0ZjAtYTcyYS0xMWU4LWJmYTktYjExM2UzNjkyODFmIiwiaWF0IjoxNTM1MDY2NTA0fQ.ld5SwfP7KWF-oTVbxqLaZz9yolaNuDSz95VybSeWV-M";

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
      // if (resp.ok) return resp.json();
      // const err = resp.stausText;
      // throw new Error(err);
      console.log(resp);
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

  let a = { test: "123" };
  return makeFetch(path, fetchOpts);
};
