import HeroSection from "@/components/HeroSection/HeroSection";
import styles from "./Home.module.scss";
import CardSection from "@/components/CardSection/CardSection";
import Navbar from "@/components/Navbar/Navbar";

function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <HeroSection />
      <CardSection />
    </div>
  );
}

export default Home;
