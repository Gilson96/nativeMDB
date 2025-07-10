import {
  Cast,
  Media,
  Movie,
  MoviesResponse,
  ReviewsResponse,
} from "@/types/movies_shows";
import { tmdbApi } from "./tmdbApi";

const moviesEdpts = tmdbApi.injectEndpoints({
  endpoints: (build) => ({
    getTrendingList: build.query<
      MoviesResponse,
      { type: string; time_window: string }
    >({
      query: (data) => {
        const { type, time_window } = data;
        return {
          url: `trending/${type}/${time_window}?api_key=010fbfb2693209806775526572b1daaf`,
        };
      },
    }),

    getMoviesList: build.query<MoviesResponse, { type: string; list: string }>({
      query: ({ type, list }) => {
        return {
          url: `${type}/${list}?api_key=010fbfb2693209806775526572b1daaf`,
        };
      },
    }),

    getMoviesDetails: build.query<Movie, { type: string; id: number }>({
      query: ({ type, id }) => {
        return {
          url: `${type}/${id}?api_key=010fbfb2693209806775526572b1daaf`,
        };
      },
    }),

    getMoviesCredits: build.query<Cast, { type: string; id: number }>({
      query: ({ type, id }) => {
        return {
          url: `${type}/${id}/credits?api_key=010fbfb2693209806775526572b1daaf`,
        };
      },
    }),

    getMoviesReviews: build.query<
      ReviewsResponse,
      { type: string; id: number }
    >({
      query: ({ type, id }) => {
        return {
          url: `${type}/${id}/reviews?api_key=010fbfb2693209806775526572b1daaf`,
        };
      },
    }),

    getMoviesMedia: build.query<Media, { type: string; id: number }>({
      query: ({ type, id }) => {
        return {
          url: `${type}/${id}/images?api_key=010fbfb2693209806775526572b1daaf`,
        };
      },
    }),

    getMoviesRecommendations: build.query<
      MoviesResponse,
      { type: string; id: number }
    >({
      query: ({ type, id }) => {
        return {
          url: `${type}/${id}/recommendations?api_key=010fbfb2693209806775526572b1daaf`,
        };
      },
    }),

    getMoviesKeywords: build.query<
      MoviesResponse,
      { type: string; id: number }
    >({
      query: ({ type, id }) => {
        return {
          url: `${type}/${id}/keywords?api_key=010fbfb2693209806775526572b1daaf`,
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetMoviesListQuery,
  useGetTrendingListQuery,
  useGetMoviesDetailsQuery,
  useGetMoviesCreditsQuery,
  useGetMoviesReviewsQuery,
  useGetMoviesMediaQuery,
  useGetMoviesRecommendationsQuery,
  useGetMoviesKeywordsQuery,
} = moviesEdpts;
