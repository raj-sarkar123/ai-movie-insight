export interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  Response: string;
  Error?: string;
}

export interface Review {
  id: string;
  author: string;
  content: string;
  date: string;
  rating: number; // 1-10
}

export interface SentimentAnalysis {
  summary: string;
  sentiment: 'Positive' | 'Mixed' | 'Negative';
}

export interface MovieInsight {
  movie: Movie;
  reviews: Review[];
  sentimentInsight: SentimentAnalysis;
}
