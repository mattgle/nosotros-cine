import styles from "./Navbar.module.scss";
import { scrollToTop } from "@/utils/scrollToTop";
import logoIcon from "@/assets/logoIcon.png";
import logo from "@/assets/logo.png";

function Navbar() {
  return (
    <header className={styles.header}>
      <div onClick={scrollToTop} className={styles.iconsContainer}>
        <img src={logoIcon} alt="icon" className={styles.icon} />
        <img src={logo} alt="logo" className={styles.icon} />
      </div>
      <div>
        <span className={styles.aboutUsTitle}>Contacto</span>
      </div>
    </header>
  );
}

export default Navbar;
