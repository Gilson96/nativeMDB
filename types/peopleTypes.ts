export interface People {
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: null;
  gender: number;
  homepage: null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}

export interface Combined_Credits {
  cast: [
    {
      id: number;
      original_title: string;
      original_name: string;
      popularity: number;
      poster_path: string;
      vote_count: number;
      media_type: string;
      name: string;
    }
  ];
  crew: [
    {
      id: number;
      original_name: string;
      original_title: string;
      popularity: number;
      poster_path: string;
      vote_count: number;
      media_type: string;
      name: string;
    }
  ];
}

export interface Search {
  results: [
    {
      id: number;
      title: string;
      original_language: string;
      original_title: string;
      overview: string;
      poster_path: string;
      media_type: string;
      popularity: number;
      release_date: string;
      first_air_date: string;
      vote_average: number;
      vote_count: number;
      name: string;
    }
  ];
}

export interface Genres {
  genres: [
    {
      id: number;
      name: string;
    }
  ];
}
