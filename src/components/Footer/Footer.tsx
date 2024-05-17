import { scrollToTop } from "@/utils/scrollToTop";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.container}>
      <div>
        <p>TODO Nombre de la empresa</p>
      </div>
      <div>
        <button
          className={styles.scrollTop}
          onClick={scrollToTop}
          onKeyDown={(e) => {
            if (e.key === "PageUp") {
              scrollToTop();
            }
          }}
          role="button"
          tabIndex={0}
          title="Scroll to top"
        >
          Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;