import styles from "./SideAdvertising.module.scss";
import jblValentinesAd from "@/assets/ads/jbl-valentines.png";

interface SideAdvertisingProps {
  position: "left" | "right";
}

const SideAdvertising = ({ position }: SideAdvertisingProps) => {
  return (
    <div className={styles.adContainer}>
      <img
        src={jblValentinesAd}
        alt={`Publicidad ${position}`}
        className={styles.adImage}
      />
    </div>
  );
};

export default SideAdvertising;
