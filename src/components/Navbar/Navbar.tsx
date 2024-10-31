import styles from "./Navbar.module.scss";
import { scrollToTop } from "@/utils/scrollToTop";
import AnimatedEye from "../AnimatedEye/AnimatedEye";

function Navbar() {
  return (
    <header className={styles.header}>
      <div onClick={scrollToTop} className={styles.iconsContainer}>
        <AnimatedEye />
      </div>
    </header>
  );
}

export default Navbar;
