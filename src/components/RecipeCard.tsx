import styles from "../styles/RecipeCard.module.css"

interface RecipeCardProps {
  url: string,
  name: string
}

const RecipeCard = ({url, name}: RecipeCardProps) => {
  return (
    <div className={styles.recipe}>
      <img src={url} alt={name} />
      <p>{name}</p>
    </div>
  )
};

export default RecipeCard;
