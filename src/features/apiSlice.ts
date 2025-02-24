import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Attempt, User, Problem } from "../types";

type CreateAttemptRequest = Attempt;
type CreateAttemptResponse = {
  user: User;
  problem: Problem;
  id: number;
} & Pick<Attempt, "status" | "date">;

type GetReviewProblemsResponse = Problem[];

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    createAttempt: builder.mutation<CreateAttemptResponse, CreateAttemptRequest>({
      query: (body) => ({
        url: "/attempts",
        method: "POST",
        body,
      }),
    }),
    getReviewProblems: builder.query<GetReviewProblemsResponse, string>({
      query: (username) => ({
        url: `/problems/dueProblems/${username}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateAttemptMutation, useGetReviewProblemsQuery } = apiSlice;
