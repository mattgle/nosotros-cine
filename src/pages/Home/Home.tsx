import Hero from "@/components/Hero/Hero";
import styles from "./Home.module.scss";
import PostList from "@/components/PostsList/PostList";

function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <PostList />
    </div>
  );
}

export default Home;
