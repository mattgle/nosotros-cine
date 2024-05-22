import HeroSection from "@/components/HeroSection/HeroSection";
import styles from "./Home.module.scss";
import CardSection from "@/components/CardSection/CardSection";

function Home() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <CardSection />
    </div>
  );
}

export default Home;
