import styles from "../styles/RecipeCard.module.css"

interface RecipeCardProps {
  url: string;
  name: string;
  id: string;
}

const RecipeCard = ({id, url, name}: RecipeCardProps) => {
  const idSearch = id.match(/[0-9]+$/);
  const numericId = idSearch && idSearch[0];

  return (
    <div className={styles.recipe}>
      <a href={`recipes/${numericId}`}>
        <img src={url} alt={name} />
        <p>{name}</p>
      </a>
    </div>
  )
};

export default RecipeCard;
