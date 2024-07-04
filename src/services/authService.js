import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, apikey } from "../databases/users";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ ...user }) => ({
        url: `/accounts:signInWithPassword?key=${apikey}`,
        method: "POST",
        body: user,
      }),
    }),
    register: builder.mutation({
      query: ({ ...user }) => ({
        url: `/accounts:signUp?key=${apikey}`,
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
