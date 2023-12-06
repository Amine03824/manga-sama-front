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
  manga: {
    code_isbn: string;
    title: string;
    volume: number;
    year_publication: number;
    author: string;
    description: string;
    cover_url: string;
    category: string;
  };
};

export type ArticleState = {
  articles: Article[];
  error: null | string;
  isLoading: boolean;
};
