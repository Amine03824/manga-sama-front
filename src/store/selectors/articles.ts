/* eslint-disable import/prefer-default-export */
import { Article } from '../../@types';

export function findArticle(articles: Article[], searchedId: number) {
  const article = articles.find((testedArticle) => {
    return testedArticle.id === searchedId;
  });
  return article;
}
