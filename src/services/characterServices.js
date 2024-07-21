import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../databases/realtimeDataBase";

export const characterApi = createApi({
  reducerPath: "characterApi",
  tagTypes: ["Character"],
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCharactersByUserId: builder.query({
      query: (ownerId) =>
        `characters.json?orderBy="ownerId"&equalTo="${ownerId}"`,
      transformResponse: (response) => {
        const transformedResponse = Object.values(response);

        return transformedResponse;
      },
      providesTags: ["Character"],
    }),

    postChararacter: builder.mutation({
      query: ({ ...character }) => ({
        url: `characters/${character.id}.json`,
        method: "PUT",
        body: character,
      }),
      invalidatesTags: ["Character"],
    }),
    deleteChararacter: builder.mutation({
      query: (id) => ({
        url: `characters/${id}.json`,
        method: "DELETE",
      }),
      invalidatesTags: ["Character"],
    }),
    updateCharacter: builder.mutation({
      query: ({ ...character }) => ({
        url: `characters/${character.id}.json`,
        method: "PUT",
        body: character,
      }),
      invalidatesTags: ["Character"],
    }),
  }),
});

export const {
  useGetCharactersByUserIdQuery,
  usePostChararacterMutation,
  useDeleteChararacterMutation,
  useUpdateCharacterMutation,
} = characterApi;
