import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authReducerName = "authApi";

export const authApi = createApi({
  reducerPath: authReducerName,
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: () => ({
        url: "/login",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
