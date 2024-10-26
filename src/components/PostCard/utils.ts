import { Category, PostType } from "@/types/posts";
import megaphoneIcon from "@/assets/megaphone.png";
import dotsIcon from "@/assets/dots.png";
import starIcon from "@/assets/star.png";
import styles from "./PostCard.module.scss";

export const getBorderStyle = (type: PostType): string => {
  switch (type) {
    case PostType.Movie:
      return styles.movie;
    case PostType.TvShow:
      return styles.tvShow;
    case PostType.Award:
      return styles.awards;
    case PostType.Documentary:
      return styles.documentary;
    default:
      return "";
  }
};

export const getIcon = (category: Category): string => {
  switch (category) {
    case Category.News:
      return megaphoneIcon;
    case Category.Reviews:
      return dotsIcon;
    case Category.Events:
      return starIcon;
    default:
      return "";
  }
};

export const getTextColorStyle = (type: PostType): string => {
  switch (type) {
    case PostType.Movie:
      return styles.movieText;
    case PostType.TvShow:
      return styles.tvShowText;
    case PostType.Award:
      return styles.awardsText;
    case PostType.Documentary:
      return styles.documentaryText;
    default:
      return styles.defaultText;
  }
};

export const getIconColorStyle = (type: PostType): string => {
  switch (type) {
    case PostType.Movie:
      return styles.movieIcon;
    case PostType.TvShow:
      return styles.tvShowIcon;
    case PostType.Award:
      return styles.awardsIcon;
    case PostType.Documentary:
      return styles.documentaryIcon;
    default:
      return styles.defaultIcon;
  }
};
