import Hero from "@/components/Hero/Hero";
import styles from "./Home.module.scss";
import CardSection from "@/components/CardSection/CardSection";

function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <CardSection />
    </div>
  );
}

export default Home;
