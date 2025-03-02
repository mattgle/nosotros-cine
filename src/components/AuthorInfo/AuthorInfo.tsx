import { Author } from "@/types/articles";
import styles from "./AuthorInfo.module.scss";

interface AuthorInfoProps {
  author: Author;
  publishDate: string;
  category: string;
}

const AuthorInfo = ({ author, publishDate, category }: AuthorInfoProps) => {
  return (
    <div className={styles.authorContainer}>
      <div className={styles.avatarContainer}>
        <img src={author.avatar} alt={author.name} className={styles.avatar} />
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.authorName}>
          Escrito por <span className={styles.name}>{author.name}</span>
        </p>
        <p className={styles.metadata}>
          {publishDate} - en <span className={styles.category}>{category}</span>
        </p>
      </div>
    </div>
  );
};

export default AuthorInfo;
