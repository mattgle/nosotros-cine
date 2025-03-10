import { useState } from "react";
import styles from "./SearchBar.module.scss";
import searchIcon from "@/assets/svg/searchIcon.svg";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        className={styles.searchInput}
      />
      <img src={searchIcon} alt="searchIcon" className={styles.searchIcon} />
    </div>
  );
};

export default SearchBar;
