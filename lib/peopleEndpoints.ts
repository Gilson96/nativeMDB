import { MoviesResponse } from "@/types/movies_shows";
import { Combined_Credits, Genres, People, Search } from "@/types/peopleTypes";
import { tmdbApi } from "./tmdbApi";

const peopleEdpts = tmdbApi.injectEndpoints({
  endpoints: (build) => ({
    getPeopleDetails: build.query<People, number>({
      query: (id) => `person/${id}?api_key=010fbfb2693209806775526572b1daaf`,
    }),
    getPeopleCombinedCredits: build.query<Combined_Credits, number>({
      query: (id) =>
        `person/${id}/combined_credits?api_key=010fbfb2693209806775526572b1daaf`,
    }),
    getSearch: build.query<Search, { title: string; type: string }>({
      query: (data) => {
        const { title, type } = data;
        return {
          url: `search/${type}?query=${title}&api_key=010fbfb2693209806775526572b1daaf&include_adult=false&language=en-US&page=1`,
        };
      },
    }),
    getAccountSearch: build.query<any, { id: number; type: "movie" | "tv" }>({
      query: ({ id, type }) => {
        return {
          url: `${type}/${id}?api_key=010fbfb2693209806775526572b1daaf&language=en-US`,
        };
      },
    }),

    getGenreList: build.query<Genres, { type: string }>({
      query: ({ type }) => {
        return {
          url: `genre/${type}/list?api_key=010fbfb2693209806775526572b1daaf&language=en-US`,
        };
      },
    }),

    getKeywordsList: build.query({
      query: () => {
        return {
          url: `search/keyword?api_key=010fbfb2693209806775526572b1daaf&language=en-US`,
        };
      },
    }),

    getFilteredMovie: build.query<
      MoviesResponse,
      { type: string; genresId: number[]; sortBy: string }
    >({
      query: ({ type, genresId, sortBy }) => {
        return {
          url: `discover/${type}?api_key=010fbfb2693209806775526572b1daaf&sort_by=${sortBy}&with_genres=${genresId}`,
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetPeopleDetailsQuery,
  useGetPeopleCombinedCreditsQuery,
  useGetSearchQuery,
  useGetAccountSearchQuery,
  useGetFilteredMovieQuery,
  useGetGenreListQuery,
  useGetKeywordsListQuery,
  useLazyGetFilteredMovieQuery
} = peopleEdpts;
