import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api", // optional
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_OXDOOR}`,
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({}),
});
