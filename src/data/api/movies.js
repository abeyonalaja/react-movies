import { makeAuthFetch } from "./utils";

export const discover = (opts = {}) => makeAuthFetch("/movies", opts);
export const movieConfig = (opts = {}) => makeAuthFetch("/config", opts);
