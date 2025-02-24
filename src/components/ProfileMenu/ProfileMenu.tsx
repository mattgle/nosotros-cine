import styles from "./ProfileMenu.module.scss";
import logoutIcon from "@/assets/svg/logoutIcon.svg";

interface ProfileMenuProps {
  isOpen: boolean;
}

const ProfileMenu = ({ isOpen }: ProfileMenuProps) => {
  return (
    <div className={`${styles.menuWrapper} ${isOpen ? styles.open : ""}`}>
      <nav className={styles.menu}>
        <ul>
          <li>Mi perfil</li>
          <li>Subir artículo</li>
          <li>Borradores</li>
          <li className={styles.logout}>
            <img src={logoutIcon} alt="logout icon" />
            Cerrar sesión
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProfileMenu;
