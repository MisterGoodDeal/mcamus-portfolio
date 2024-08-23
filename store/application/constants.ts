import { App } from "./application.model";

export const initialState: App = {
  user: {
    id: -1,
    created_at: "",
    name: "",
    email: "",
    password: "redacted",
  },
  loading: false,
  token: "",
  lang: "fr",
};

export const reducerPath = "applicationApi";

export const CACHE_KEY = "App";

export const endpoint = {
  login: {
    route: "auth/login",
    method: "POST",
  },
  me: {
    route: "auth/me",
    method: "GET",
  },
};
