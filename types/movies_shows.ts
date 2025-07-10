export interface Movie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  genres: [{ name: string }];
  tagline: string;
  overview: string;
  status: string;
  original_language: string;
  revenue: number;
  budget: number;
  name: string;
  first_air_date: string;
  number_of_seasons: number;
  production_companies: [
    {
      id: number;
      logo_path: string;
      name: string
    }
  ];
  media_type: string;
  networks: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }
  ];
  number_of_episodes: number
}

export interface MoviesResponse {
  results: Movie[];
  keywords: [
    {
      id: number;
      name: string;
      title: string;
    }
  ];
}

export interface Cast {
  cast: [
    {
      gender: number;
      id: number;
      known_for_department: string;
      name: string;
      original_name: string;
      popularity: number;
      profile_path: string;
      cast_id: number;
      character: string;
      order: number;
    }
  ];
  crew: [
    {
      gender: number;
      id: number;
      known_for_department: string;
      name: string;
      original_name: string;
      popularity: number;
      profile_path: string;
      cast_id: number;
      job: string;
    }
  ];
}

export interface Reviews {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface ReviewsResponse {
  results: Reviews[];
}

export interface Media {
  id: number;
  backdrops: [
    {
      aspect_ratio: number;
      height: number;
      file_path: string;
      width: number;
    }
  ];
  logos: [
    {
      aspect_ratio: number;
      height: number;
      file_path: string;
      width: number;
    }
  ];
  posters: [
    {
      aspect_ratio: number;
      height: number;
      file_path: string;
      width: number;
    }
  ];
}

export const languageMap: Record<string, string> = {
  en: "English",
  es: "Spanish",
  fr: "French",
  ja: "Japanese",
  ko: "Korean",
  zh: "Chinese",
  hi: "Hindi",
};
