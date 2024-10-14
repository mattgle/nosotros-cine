import { useState, useMemo } from "react";
import ShowcaseCard from "@/components/ShowcaseCard/ShowcaseCard";
import styles from "./ShowcaseList.module.scss";
import posts from "@/data/posts.json";
import cn from "classnames";

const ShowcaseList = () => {
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
    <div className={styles.showcaseContainer}>
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
          <ShowcaseCard
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

export default ShowcaseList;
