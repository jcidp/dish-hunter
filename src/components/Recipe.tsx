import { useParams } from "react-router-dom"
import useRecipeDetail from "../hooks/useRecipeDetail";
import styles from "../styles/Recipe.module.css"

interface Instruction {
  position: number;
  display_text: string;
}

interface RecipeProps {
  name: string,
  description: string,
  nutrition: {[element: string]: string},
  instructions: Instruction[],
}

interface NutritionKeys {
  calories: number;
  carbohydrates: number;
  fat: number;
  fiber: number;
  protein: number;
  sugar: number;
  updated_at: string;
}

const Recipe = () => {
  const { id } = useParams();
  const { recipe, error, loading } = useRecipeDetail(Number(id));

  if (error) return <><h1>Error fetching recipe :/</h1><p>Please try again later.</p></>;

  if (loading) return <><h1>Loading...</h1></>;

  const tags = recipe.tags.map(tag => <span className={styles.tag} key={tag.id}>{tag.display_name}</span>);

  const instructionList = recipe.instructions.sort((a, b) => a.position - b.position)
    .map(instruction => <li key={instruction.position}>{instruction.display_text}</li>);

  const nutritionList = Object.keys(recipe.nutrition).map((key, i) =>
    key !== "updated_at" && <li key={i}>{key}: {recipe.nutrition[key as keyof NutritionKeys]}</li>);

  return (
    <>
    <main className={styles.page}>
      <h1>{recipe.name}</h1>
      <div className={styles.header}>
        <img src={recipe.thumbnail_url} alt={recipe.name} />
        <div className={styles.rightHeader}>
          <p className={styles.description}>{recipe.description}</p>
          <div className={styles.categories}>
            {tags}
          </div>
        </div>
      </div>
      <div className={styles.list}>
        <p>Instructions:</p>
        <ol>{instructionList}</ol>
      </div>
      <div className={styles.list}>
        <p>Nutrition:</p>
        <ul>{nutritionList}</ul>
      </div>
    </main>
    </>
  )
}

export default Recipe;
