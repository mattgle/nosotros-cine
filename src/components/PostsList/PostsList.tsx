import { useState, useMemo } from "react";
import PostsCard from "@/components/PostsCard/PostsCard";
import styles from "./PostsList.module.scss";
import posts from "@/data/posts.json";
import cn from "classnames";

const PostsList = () => {
  const [category, setCategory] = useState<string>("Ver Todo");

  const uniqueCategories = useMemo(() => {
    return [
      "Ver Todo",
      ...posts.reduce<string[]>((acc, item) => {
        if (!acc.includes(item.category)) {
          acc.push(item.category);
        }
        return acc;
      }, []),
    ];
  }, [posts]);

  const filteredData = useMemo(() => {
    return category === "Ver Todo"
      ? posts
      : posts.filter((item) => item.category === category);
  }, [category, posts]);

  return (
    <div className={styles.postsContainer}>
      <div className={styles.filterContainer}>
        {uniqueCategories.map((categoryItem) => (
          <button
            key={categoryItem}
            onClick={() => setCategory(categoryItem)}
            className={cn(styles.filter, {
              [styles.activeFilter]: categoryItem == category,
            })}
          >
            {categoryItem}
          </button>
        ))}
      </div>
      <div className={styles.listContainer}>
        {filteredData.map((item, index) => (
          <PostsCard
            key={index}
            img={item.img}
            title={item.title}
            type={item.type}
            filter={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsList;
