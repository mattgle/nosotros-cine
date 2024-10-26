export enum Category {
  ViewAll = "Ver Todo",
  News = "Noticias",
  Reviews = "Reseñas",
  Events = "Eventos",
}

export enum PostType {
  Movie = "Película",
  TvShow = "Serie",
  Award = "Premio",
  Documentary = "Documental",
}

export interface Post {
  img: string;
  title: string;
  type: PostType;
  category: Category;
}
