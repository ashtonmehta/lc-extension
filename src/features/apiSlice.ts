import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../types";

type UsersResponse = User[];

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<UsersResponse, void>({
      query: () => "/users",
    }),
  }),
});

export const { useGetAllUsersQuery } = apiSlice;
