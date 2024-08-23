import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createApi } from "@reduxjs/toolkit/query/react";
import toast from "react-hot-toast";
import { GenericApiError } from "../store.model";
import { baseQuery } from "./../api";

import {
  LoginRequest,
  LoginResponse,
  MeResponse,
  User,
} from "./application.model";
import { CACHE_KEY, endpoint, initialState, reducerPath } from "./constants";
import { loginErrorsHandler } from "./errors/login.errors";

export const applicationApi = createApi({
  reducerPath,
  baseQuery,
  tagTypes: [CACHE_KEY],
  endpoints: (builder) => ({
    // Login
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (user) => ({
        url: `${endpoint.login.route}`,
        method: endpoint.login.method,
        body: user,
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        dispatch(setLoading(true));
        try {
          const { data } = await queryFulfilled;
          dispatch(setLoading(false));
          dispatch(setToken(data.authToken));

          toast.success("👋 Bienvenue !");
        } catch (err) {
          const error = err as GenericApiError;
          loginErrorsHandler(error);
          console.log(error);

          dispatch(setLoading(false));
        }
      },
    }),

    // User's informations route
    getUser: builder.query<MeResponse, string>({
      query: () => ({
        url: `${endpoint.me.route}`,
        method: endpoint.me.method,
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        dispatch(setLoading(true));

        try {
          const { data } = await queryFulfilled;

          dispatch(setLoading(false));
          dispatch(setUserInformation(data));
        } catch (err) {
          const error = err as GenericApiError;
          dispatch(setLoading(false));
        }
      },
    }),
  }),
});

export const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout(state) {
      state.user = initialState.user;
      state.token = initialState.token;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setLang(state, action: PayloadAction<"fr" | "en">) {
      state.lang = action.payload;
    },
    setUserInformation: (state, action: PayloadAction<MeResponse>) => {
      state.user = {
        ...action.payload,
        password: "redacted",
      };
    },
  },
});

export const {
  setUser,
  setLoading,
  setToken,
  setUserInformation,
  setLang,
  logout,
} = applicationSlice.actions;

export const { useLoginMutation, useGetUserQuery } = applicationApi;
