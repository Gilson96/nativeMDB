import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { auth } from "./firebase";

export const firebaseApi = createApi({
  reducerPath: "firebaseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://firestore.googleapis.com/v1/projects/nativemdb/databases/(default)/documents`,
    prepareHeaders: async (headers) => {
      const token = await auth.currentUser?.getIdToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export const {} = firebaseApi;
