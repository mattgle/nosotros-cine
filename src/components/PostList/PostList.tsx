import { useState, useMemo } from "react";
import styles from "./PostList.module.scss";
import cn from "classnames";
import posts from "@/data/posts.json";
import { Categories } from "@/types/enums/Categories";
import PostCard from "../PostCard/PostCard";

const PostList = () => {
  const [category, setCategory] = useState<Categories>(Categories.VerTodo);

  const uniqueCategories = useMemo(() => {
    return [
      Categories.VerTodo,
      ...posts.reduce<string[]>((acc, item) => {
        if (!acc.includes(item.category)) {
          acc.push(item.category);
        }
        return acc;
      }, []),
    ];
  }, [posts]);

  const filteredData = useMemo(() => {
    return category === Categories.VerTodo
      ? posts
      : posts.filter((item) => item.category === category);
  }, [category, posts]);

  return (
    <div className={styles.postsContainer}>
      <div className={styles.filterContainer}>
        {uniqueCategories.map((categoryItem) => (
          <button
            key={categoryItem}
            onClick={() => setCategory(categoryItem as Categories)}
            className={cn(styles.filter, {
              [styles.activeFilter]: categoryItem == category,
            })}
          >
            {categoryItem}
          </button>
        ))}
      </div>
      <div className={styles.listContainer}>
        {filteredData.map(({ img, title, type, category }, index) => (
          <PostCard
            key={index}
            img={img}
            title={title}
            type={type}
            category={category as Categories}
          />
        ))}
      </div>
    </div>
  );
};

export default PostList;
