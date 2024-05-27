import styles from "./ShowcaseCard.module.scss";

interface Props {
  img: string;
  title: string;
  type: string;
}

const ShowcaseCard = ({ img, title, type }: Props) => {
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
        <span className={styles.showcaseType}>{type}</span>
      </div>
    </div>
  );
};

export default ShowcaseCard;
