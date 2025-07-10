import { Movie } from "@/types/movies_shows";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { firebaseApi } from "./firebaseApi";

const accountApi = firebaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyList: builder.query<Movie[], { userId: string; list: string }>({
      query: ({ userId, list }) => ({
        url: `/users/${userId}/${list}`, 
        method: "GET",
      }),
      transformResponse: (response: any) => {
        console.log("Firebase Raw:", JSON.stringify(response, null, 2));
        const documents = response?.documents || [];
        return documents.map((doc: any) => {
          const fields = doc.fields || {};
          return {
            id: fields.movieId?.integerValue || null,
            media_type: fields.mediaType?.stringValue || null,
          };
        });
      },
    }),

    addToMyList: builder.mutation({
      query: ({
        userId,
        movieId,
        list,
        type
      }: {
        userId: string | undefined;
        movieId: number;
        list: string;
        type: string;
      }) => ({
        url: `/users/${userId}/${list}?documentId=${movieId}`,
        method: "POST",
        body: {
          fields: {
            movieId: { integerValue: movieId },
            mediaType: {stringValue: type}
          },
        },
      }),
    }),

    removeFromMyList: builder.mutation({
      query: ({
        userId,
        list,
        movieId,
      }: {
        userId: string | undefined;
        list: string;
        movieId: number | undefined;
      }) => ({
        url: `/users/${userId}/${list}/${movieId}`,
        method: "DELETE",
      }),
    }),

    login: builder.mutation({
      async queryFn({ email, password }) {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          const token = await userCredential.user.getIdToken();
          return { data: { user: userCredential.user, token } };
        } catch (error: any) {
          return { error: { status: 401, data: error.message } };
        }
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useAddToMyListMutation,
  useGetMyListQuery,
  useLoginMutation,
  useRemoveFromMyListMutation,
} = accountApi;
