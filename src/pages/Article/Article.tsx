import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Article.module.scss";
import SideAdvertising from "@/components/SideAdvertising/SideAdvertising";
import articles from "@/data/articles.json";
import { Article as ArticleType } from "@/types/articles";
import AuthorInfo from "@/components/AuthorInfo/AuthorInfo";

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
        </div>

        <div className={styles.rightAdContainer}>
          <SideAdvertising position="right" />
        </div>
      </div>

      <div className={styles.contactSection}>
        <h2>Contacto</h2>
        <p>
          Esperamos que puedas visitarnos en nuestras redes donde vas a
          encontrar <strong>reseñas de películas y series</strong> y todas las
          noticias actuales sobre nuevos estrenos y sobre tus actores favoritos.
        </p>
        <div className={styles.socialLinks}>
          {/* Aquí irían los iconos de redes sociales */}
        </div>
      </div>
    </div>
  );
};

export default Article;
