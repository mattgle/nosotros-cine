import styles from "./PostCard.module.scss";
import cn from "classnames";
import { Post } from "@/types/posts";
import {
  getBorderStyle,
  getIcon,
  getIconColorStyle,
  getTextColorStyle,
} from "./utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "@/constants/routes";

interface PostCardProps extends Post {
  id: string;
}

const PostCard = ({ img, title, type, category, id }: PostCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(Routes.Article.replace(":id", id));
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <img
        src={img}
        alt={title}
        className={cn(styles.postImage, getBorderStyle(type))}
      />
      <p className={styles.postTitle}>{title}</p>
      <div className={styles.postTypeContainer}>
        <span
          className={cn(styles.postType, getTextColorStyle(type), {
            [styles.postHovered]: isHovered,
          })}
        >
          {type.toUpperCase()}
        </span>
        <img
          src={getIcon(category)}
          alt={category}
          className={cn(styles.postIcon, {
            [getIconColorStyle(type)]: isHovered,
          })}
        />
      </div>
    </div>
  );
};

export default PostCard;
