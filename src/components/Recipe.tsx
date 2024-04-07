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

  const nutritionList = Object.keys(recipe.nutrition).map((key, i) => <li key={i}>{key}: {recipe.nutrition[key as keyof NutritionKeys]}</li>)

  return (
    <>
    <main className={styles.page}>
      <h1>{id} {recipe.name}</h1>
      <img src={recipe.thumbnail_url} alt={recipe.name} />
      <p>Category</p>
      <p>{recipe.description}</p>
      <p>Instructions:</p>
      <ul>instructionList</ul>
      <p>Nutrition:</p>
      <ul>{nutritionList}</ul>
    </main>
    </>
  )
}

export default Recipe;
