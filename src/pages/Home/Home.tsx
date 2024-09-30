import Hero from "@/components/Hero/Hero";
import styles from "./Home.module.scss";
import ShowcaseList from "@/components/ShowcaseList/ShowcaseList";

function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <CardSection />
      <ShowcaseList />
    </div>
  );
}

export default Home;
