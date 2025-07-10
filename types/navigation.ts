export type RootStackParamList = {
  home: undefined;
  login: undefined;
  movie: { id: number; type: string };
  people: { id: number };
  profile: undefined;
  filtered: {mediaType: string};
};
