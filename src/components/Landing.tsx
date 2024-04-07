import { useState } from "react";
import RecipeCard from "./RecipeCard"
import useRecipes from "../hooks/useRecipes";
import styles from "../styles/Landing.module.css"
import { useSearchParams } from "react-router-dom";

const cleanParams = (params: string) => params.replace(/%20/g, " ");

const Landing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { recipes, error, loading } = useRecipes(0, searchParams.get("ingredients") ?? "", true);
  const [searchValue, setSearchValue] = useState(cleanParams(searchParams.get("ingredients") ?? ""));

  if (error) {
    console.log(error);
  }

  if (loading) {
    console.log("Loading...");
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.key !== "Enter") return;
    const params = {ingredients: searchValue.replace(/ /g, "%20")}
    setSearchParams(params);
  }

  return(
    <>
      <header className={styles.header}>
        <h1>Welcome to the recipe hunt!</h1>
        <p>Search for a recipe based on ingredients</p> 
      </header>
      <main className={styles.centerText}>
        <input type="search" onChange={handleChange} onKeyUp={handleSearch} name="ingredients" id="ingredients"
          placeholder="eggs ham cheese" value={searchValue} autoComplete="off" />
        <div className={styles.recipes}>
          {recipes.results.map(recipe => (
            <RecipeCard key={recipe.canonical_id} id={recipe.canonical_id} url={recipe.thumbnail_url} name={recipe.name} />
          ))}
        </div>
      </main>
    </>
  )
};

export default Landing;