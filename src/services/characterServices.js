import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../databases/realtimeDataBase";

export const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: () => `characters.json`,
      transformErrorResponse: (response) => {
        /*
        Se usa esta función para transformar la respuesta de firebase que organiza los elementos como:
        [0:{},
        1:{},
        2:{},]
        */
        const transformedResponse = Object.values(response);
        return transformedResponse;
      },
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

export const { useGetCharactersQuery, usePostChararacterMutation } =
  characterApi;
