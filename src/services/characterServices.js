import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../databases/realtimeDataBase";

export const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCharactersByUserId: builder.query({
      query: (ownerId) =>
        `characters.json?orderBy="ownerId"&equalTo="${ownerId}"`,
      transformResponse: (response) => {
        const transformedResponse = Object.values(response);

        return transformedResponse;
      },
      keepUnusedDataFor: 0,
    }),
    postChararacter: builder.mutation({
      query: ({ ...character }) => ({
        url: `characters.json`,
        method: "POST",
        body: character,
      }),
    }),
  }),
});

export const { useGetCharactersByUserIdQuery, usePostChararacterMutation } =
  characterApi;
