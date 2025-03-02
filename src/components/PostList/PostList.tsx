import { useState, useMemo } from "react";
import styles from "./PostList.module.scss";
import cn from "classnames";
import posts from "@/data/posts.json";
import { Category, Post } from "@/types/posts";
import PostCard from "../PostCard/PostCard";

const PostList = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    Category.ViewAll
  );

  const uniqueCategories = useMemo(() => {
    const categories = [
      Category.ViewAll,
      ...posts.reduce<string[]>((acc, item) => {
        if (!acc.includes(item.category)) {
          acc.push(item.category);
        }
        return acc;
      }, []),
    ];

    return categories as Category[];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    const filtered =
      selectedCategory === Category.ViewAll
        ? posts
        : posts.filter((item) => item.category === selectedCategory);

    return filtered as Post[];
  }, [selectedCategory, posts]);

  const renderFilters = (category: Category) => {
    return (
      <button
        key={category}
        onClick={() => setSelectedCategory(category)}
        className={cn(styles.filter, {
          [styles.activeFilter]: category === selectedCategory,
        })}
      >
        {category}
      </button>
    );
  };

  const renderPosts = (
    { img, title, type, category, id }: Post,
    index: number
  ) => {
    return (
      <PostCard
        key={index}
        img={img}
        title={title}
        type={type}
        category={category}
        id={id}
      />
    );
  };

  return (
    <div className={styles.postsContainer}>
      <div className={styles.filterContainer}>
        {uniqueCategories.map(renderFilters)}
      </div>
      <div className={styles.listContainer}>
        {filteredPosts.map(renderPosts)}
      </div>
    </div>
  );
};

export default PostList;
