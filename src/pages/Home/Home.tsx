import HeroSection from "@/components/HeroSection/HeroSection";
import styles from "./Home.module.scss";
import ShowcaseList from "@/components/ShowcaseList/ShowcaseList";

function Home() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <ShowcaseList />
    </div>
  );
}

export default Home;
