export type Article = {
  id: number;
  slug: string;
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
  category_id: number;
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

export type TManga = {
  code_isbn: number;
  title: string;
  volume: number;
  year_publication: number;
  author: string;
  description: string | undefined;
  cover_url: string | undefined;
  category_id: number;
  create_at: string;
  updated_at: string;
};
