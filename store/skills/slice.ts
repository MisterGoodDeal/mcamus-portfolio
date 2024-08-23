import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createApi } from "@reduxjs/toolkit/query/react";
import toast from "react-hot-toast";
import { GenericApiError } from "../store.model";
import { baseQuery } from "../api";

import { Skill, SkillCreate, SkillUpdate } from "./skills.model";
import { CACHE_KEY, endpoint, initialState, reducerPath } from "./constants";
import { skillsErrorsHandler } from "./errors/skills.errors";
import { setLoading } from "../application/slice";

export const skillsApi = createApi({
  reducerPath,
  baseQuery,
  tagTypes: [CACHE_KEY],
  endpoints: (builder) => ({
    // Create a skill
    createSkill: builder.mutation<Skill, SkillCreate>({
      query: (body) => ({
        url: endpoint.create.url,
        method: endpoint.create.method,
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(setLoading(true));
        try {
          const { data } = await queryFulfilled;
          dispatch(setLoading(false));
        } catch (err) {
          const error = err as GenericApiError;
          skillsErrorsHandler(error);
          dispatch(setLoading(false));
        }
      },
    }),

    // Get all skills
    getAllSkills: builder.query<Skill[], void>({
      query: () => ({
        url: endpoint.getAll.url,
        method: endpoint.getAll.method,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(setLoading(true));

        try {
          const { data } = await queryFulfilled;
          dispatch(setLoading(false));
        } catch (err) {
          const error = err as GenericApiError;
          skillsErrorsHandler(error);
          dispatch(setLoading(false));
        }
      },
    }),

    // Get one skill
    getOneSkill: builder.query<Skill, number>({
      query: (id) => ({
        url: endpoint.getOne.url(id),
        method: endpoint.getOne.method,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(setLoading(true));

        try {
          const { data } = await queryFulfilled;
          dispatch(setLoading(false));
        } catch (err) {
          const error = err as GenericApiError;
          skillsErrorsHandler(error);
          dispatch(setLoading(false));
        }
      },
    }),

    // Update a skill
    updateSkill: builder.mutation<Skill, SkillUpdate & { id: number }>({
      query: ({ id, ...body }) => ({
        url: endpoint.update.url(id),
        method: endpoint.update.method,
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(setLoading(true));

        try {
          const { data } = await queryFulfilled;
          dispatch(setLoading(false));
        } catch (err) {
          const error = err as GenericApiError;
          skillsErrorsHandler(error);
          dispatch(setLoading(false));
        }
      },
    }),

    // Delete a skill
    deleteSkill: builder.mutation<void, number>({
      query: (id) => ({
        url: endpoint.delete.url(id),
        method: endpoint.delete.method,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(setLoading(true));

        try {
          await queryFulfilled;
          dispatch(setLoading(false));
        } catch (err) {
          const error = err as GenericApiError;
          skillsErrorsHandler(error);
          dispatch(setLoading(false));
        }
      },
    }),
  }),
});

export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {},
});

export const {} = skillsSlice.actions;

export const {
  useCreateSkillMutation,
  useGetAllSkillsQuery,
  useGetOneSkillQuery,
  useUpdateSkillMutation,
  useDeleteSkillMutation,
} = skillsApi;
