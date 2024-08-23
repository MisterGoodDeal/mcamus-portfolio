import { createSelector } from "reselect";
import { store } from "../store";

type RootState = ReturnType<typeof store.getState>;

const get = (state: RootState) => state.skills;
export const skillsState = createSelector(get, (skills) => skills);
