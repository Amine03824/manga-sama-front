export type Article = {
  id: number;
  title: string;
  description: string;
  price: number;
  image_url: string;
  user: {
    lastname: string;
    firstname: string;
    pseudo: string;
    email: string;
    city: string;
  };
  code_isbn: string;
  volume: number;
  year_publication: number;
  author: string;
  cover_url: string;
  category: string;
};

export type ArticleState = {
  list_articles: Article[];
  error: null | string;
  isLoading: boolean;
};

export type TCategory = {
  id: number;
  category_name: string;
  created_at: string;
  updated_at: null | string;
};
