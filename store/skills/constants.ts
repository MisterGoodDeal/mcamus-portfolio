import { Skill } from "./skills.model";

export const initialState: Skill[] = [];

export const reducerPath = "skillsApi";

export const CACHE_KEY = "App";

export const endpoint = {
  create: {
    method: "POST",
    url: "/skill",
  },
  getAll: {
    method: "GET",
    url: "/skill",
  },
  getOne: {
    method: "GET",
    url: (id: number) => `/skill/${id}`,
  },
  update: {
    method: "PATCH",
    url: (id: number) => `/skill/${id}`,
  },
  delete: {
    method: "DELETE",
    url: (id: number) => `/skill/${id}`,
  },
};
