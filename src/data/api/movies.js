import { makeAuthFetch } from "./utils";

export const discover = (opts = {}) => makeAuthFetch("/movies", opts);
