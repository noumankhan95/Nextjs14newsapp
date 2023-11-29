type Category =
  | "Business"
  | "Entertainment"
  | "General"
  | "Health"
  | "Science"
  | "Sports"
  | "Technology";

type Article = {
  _id: string;
  author: string;
  category: string;
  description: string;
  image: string;
  country: string;
  language: string;
  published_at: string; // You might want to use a specific date type here if applicable
  source: string;
  title: string;
  url: string;
};

type NewsResponse = {
  status: boolean;
  data: DataResponse;
};

type DataResponse = {
  message?: string;
  docs?: Article[];
};
type Seachbox = {
  terms: string;
};
