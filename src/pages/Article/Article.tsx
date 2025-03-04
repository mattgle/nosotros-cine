import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Article.module.scss";
import SideAdvertising from "@/components/SideAdvertising/SideAdvertising";
import articles from "@/data/articles.json";
import { Article as ArticleType } from "@/types/articles";
import AuthorInfo from "@/components/AuthorInfo/AuthorInfo";
import shareIcon from "@/assets/svg/share-icon.svg";
import instagramIcon from "@/assets/svg/instagram-icon.svg";
import twitterIcon from "@/assets/svg/twitter-icon.svg";
import facebookIcon from "@/assets/svg/facebook-icon.svg";
import gmailIcon from "@/assets/svg/gmail-icon.svg";
const Article = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<ArticleType | null>(null);

  useEffect(() => {
    const foundArticle = articles.find((art) => art.id === id);
    if (foundArticle) {
      setArticle(foundArticle as unknown as ArticleType);
    }
  }, [id]);

  if (!article) {
    return <div className={styles.pageContainer}>Cargando artículo...</div>;
  }

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.pageContainer}>
        <div className={styles.leftAdContainer}>
          <SideAdvertising position="left" />
        </div>

        <div className={styles.articleContainer}>
          <div className={styles.articleHeader}>
            <div className={styles.authorInfoContainer}>
              <AuthorInfo
                author={article.author}
                publishDate={article.publishDate}
                category={article.category}
              />
            </div>

            <h1 className={styles.articleTitle}>{article.title}</h1>
            <div className={styles.divider} />
          </div>

          <div className={styles.articleIntro}>{article.content[0]}</div>

          <img
            src={article.img}
            alt={article.title}
            className={styles.articleImage}
          />

          <div className={styles.articleContent}>
            {article.content.slice(1).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {article.gallery && (
            <div className={styles.gallerySection}>
              {article.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Galería ${index + 1}`}
                  className={styles.galleryImage}
                />
              ))}
            </div>
          )}

          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon} aria-label="Compartir">
              <img src={shareIcon} alt="Compartir" />
            </a>
            <a
              href="https://instagram.com"
              className={styles.socialIcon}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a
              href="https://x.com"
              className={styles.socialIcon}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a
              href="https://facebook.com"
              className={styles.socialIcon}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src={facebookIcon} alt="Facebook" />
            </a>
          </div>
        </div>

        <div className={styles.rightAdContainer}>
          <SideAdvertising position="right" />
        </div>
      </div>

      <div className={styles.contactSection}>
        <h2>Contacto</h2>
        <p>
          Esperamos que puedas visitarnos en nuestras redes donde vas a
          encontrar reseñas de películas y series y todas las noticias actuales
          sobre nuevos estrenos y sobre tus actores favoritos.
        </p>
        <div className={styles.contactIconContainer}>
          <a
            href="https://instagram.com"
            className={styles.contactIcon}
            target="_blank"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a
            href="https://x.com"
            className={styles.contactIcon}
            target="_blank"
          >
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a
            href="mailto:contacto@example.com"
            className={styles.contactIcon}
            target="_blank"
          >
            <img src={gmailIcon} alt="Gmail" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Article;
