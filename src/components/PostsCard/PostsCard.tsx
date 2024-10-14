import styles from "./PostsCard.module.scss";
import megaphoneIcon from "@/assets/megaphone.png";
import dotsIcon from "@/assets/dots.png";
import starIcon from "@/assets/star.png";

interface Props {
  img: string;
  title: string;
  type: string;
  filter: string;
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

const getIcon = (filter: string): string => {
  switch (filter) {
    case "Noticias":
      return megaphoneIcon;
    case "Reseñas":
      return dotsIcon;
    case "Eventos":
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
        className={`${styles.postsImage} ${getBorderStyle(type)}`}
      />
      <div className={styles.postsTitleContainer}>
        <p className={styles.postsTitle}>{title}</p>
      </div>
      <div className={styles.postsTypeContainer}>
        <span className={`${styles.postsType} ${getTextColorStyle(type)}`}>
          {type.toUpperCase()}
        </span>
        <img src={getIcon(filter)} alt={filter} className={styles.postsIcon} />
      </div>
    </div>
  );
};

export default PostsCard;
