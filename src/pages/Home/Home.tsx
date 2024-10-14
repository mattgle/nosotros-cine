import Hero from "@/components/Hero/Hero";
import styles from "./Home.module.scss";
import PostsList from "@/components/PostsList/PostsList";

function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <PostsList />
    </div>
  );
}

export default Home;
