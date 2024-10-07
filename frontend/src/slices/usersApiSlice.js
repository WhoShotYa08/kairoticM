import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const userApiSplice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),

    getUsers: builder.query({
      query: () => ({
        url: `${USERS_URL}`,
        method: "GET",
      }),
      providesTags: ["User"],
      keepUnusedDataFor: 1000,
    }),

    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useGetUsersQuery,useRegisterMutation } =
  userApiSplice;
