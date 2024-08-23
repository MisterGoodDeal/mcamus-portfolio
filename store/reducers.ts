import { applicationApi, applicationSlice } from "./application/slice";
import { skillsApi, skillsSlice } from "./skills/slice";

export const reducers = {
  [applicationApi.reducerPath]: applicationApi.reducer,
  [applicationSlice.name]: applicationSlice.reducer,
  [skillsApi.reducerPath]: skillsApi.reducer,
  [skillsSlice.name]: skillsSlice.reducer,
} as const;
