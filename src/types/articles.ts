import { PostType } from "./posts";

export interface Author {
  name: string;
  avatar: string;
}

export interface Article {
  id: string;
  title: string;
  img: string;
  publishDate: string;
  category: string;
  type: PostType;
  author: Author;
  content: string[];
  gallery?: string[];
  relatedPosts: string[];
}
