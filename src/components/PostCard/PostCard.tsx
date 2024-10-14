import styles from "./PostCard.module.scss";
import megaphoneIcon from "@/assets/megaphone.png";
import dotsIcon from "@/assets/dots.png";
import starIcon from "@/assets/star.png";
import cn from "classnames";
import { Categories } from "@/types/enums/Categories";

interface Props {
  img: string;
  title: string;
  type: string;
  category: Categories;
}

const getBorderStyle = (type: string): string => {
  switch (type) {
    case "Película":
      return styles.movie;
    case "Serie":
      return styles.serie;
    case "Premio":
      return styles.awards;
    case "Documental":
      return styles.documentary;
    default:
      return "";
  }
};

const getIcon = (category: Categories): string => {
  switch (category) {
    case Categories.Noticias:
      return megaphoneIcon;
    case Categories.Reseñas:
      return dotsIcon;
    case Categories.Eventos:
      return starIcon;
    default:
      return "";
  }
};

const getTextColorStyle = (type: string): string => {
  switch (type) {
    case "Película":
      return styles.movieText;
    case "Serie":
      return styles.serieText;
    case "Premio":
      return styles.awardsText;
    case "Documental":
      return styles.documentaryText;
    default:
      return styles.defaultText;
  }
};

const PostCard = ({ img, title, type, category }: Props) => {
  return (
    <div className={styles.container}>
      <img
        src={img}
        alt={title}
        className={cn(styles.postImage, getBorderStyle(type))}
      />
      <div className={styles.postTitleContainer}>
        <p className={styles.postTitle}>{title}</p>
      </div>
      <div className={styles.postTypeContainer}>
        <span className={cn(styles.postType, getTextColorStyle(type))}>
          {type.toUpperCase()}
        </span>
        <img
          src={getIcon(category)}
          alt={category}
          className={styles.postIcon}
        />
      </div>
    </div>
  );
};

export default PostCard;
