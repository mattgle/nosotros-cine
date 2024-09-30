import { useState } from "react";
import ShowcaseCard from "@/components/ShowcaseCard/ShowcaseCard";
import styles from "./ShowcaseList.module.scss";
import data from "@/data/showcase.json";

interface ShowcaseItem {
  img: string;
  title: string;
  type: string;
  filter: string;
}

const ShowcaseList = () => {
  const [filter, setFilter] = useState<string>("Ver Todo");

  const handleFilterChange = (newFilter: string) => () => {
    setFilter(newFilter);
  };

  const uniqueFilters: string[] = [
    "Ver Todo",
    ...data.map((item) => item.filter),
  ];
  const filteredData: ShowcaseItem[] =
    filter === "Ver Todo"
      ? data
      : data.filter((item) => item.filter === filter);

  return (
    <div className={styles.showcaseContainer}>
      <div className={styles.filterContainer}>
        {uniqueFilters.map((filterItem, index) => (
          <button key={index} onClick={handleFilterChange(filterItem)}>
            {filterItem}
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
            filter={item.filter}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowcaseList;
