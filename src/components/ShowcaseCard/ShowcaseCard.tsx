import styles from "./ShowcaseCard.module.scss";
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

const ShowcaseCard = ({ img, title, type, filter }: Props) => {
  return (
    <div className={styles.container}>
      <img
        src={img}
        alt={title}
        className={`${styles.showcaseImage} ${getBorderStyle(type)}`}
      />
      <div className={styles.showcaseTitleContainer}>
        <p className={styles.showcaseTitle}>{title}</p>
      </div>
      <div className={styles.showcaseTypeContainer}>
        <span className={`${styles.showcaseType} ${getTextColorStyle(type)}`}>
          {type.toUpperCase()}
        </span>
        <img
          src={getIcon(filter)}
          alt={filter}
          className={styles.showcaseIcon}
        />
      </div>
    </div>
  );
};

export default ShowcaseCard;
