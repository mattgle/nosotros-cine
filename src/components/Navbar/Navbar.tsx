import { useState } from "react";
import styles from "./Navbar.module.scss";
import { scrollToTop } from "@/utils/scrollToTop";
import AnimatedEye from "../AnimatedEye/AnimatedEye";
import logoNosotrosCine from "@/assets/logoNosotrosCine.png";
import profile from "@/assets/svg/profileSvg.svg";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import SearchBar from "../SearchBar/SearchBar";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div onClick={scrollToTop} className={styles.iconsContainer}>
        <AnimatedEye />
        <img src={logoNosotrosCine} alt="logo" />
      </div>
      <SearchBar />
      <div className={styles.menuContainer}>
        <button className={styles.contactButton}>Contacto</button>
        <div className={styles.profileContainer}>
          <img
            src={profile}
            alt="profile"
            onClick={toggleMenu}
            className={styles.profileIcon}
          />
          <ProfileMenu isOpen={isMenuOpen} />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
