export type Article = {
  article: {
    id: number;
    slug: string;
    title: string;
    description: string;
    price: number;
    image_url: string;
  };
  manga: {
    code_isbn: string;
    cover_url: string;
    author: string;
    volume: number;
    year_publication: number;
  };
  user: {
    lastname: string;
    firstname: string;
    pseudo: string;
    email: string;
    city: string;
  };
};

export type ArticleState = {
  list_articles: Article[];
  error: null | string;
  isLoading: boolean;
  filteredArticles: Article[];
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
