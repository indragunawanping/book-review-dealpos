export interface Book{
  name: string;
  year: string;
  reviews: Review[];
}

interface Review{
  email: string;
  note: string;
  star: number;
  stars: number[];
}
