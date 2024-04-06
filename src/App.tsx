import { useState } from 'react';
import './App.css'
import { RecipeCard } from './components/RecipeCard';
import { useRecipes } from './hooks/useRecipes'

function App() {
  const [ingredients, setIngredients] = useState("");
  const [page, setPage] = useState(0)
  const { recipes, error, loading } = useRecipes(page * 20, ingredients)
  const [searchValue, setSearchValue] = useState("");

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
    setIngredients(searchValue.replace(/ /g, "%20"));
  }

  return (
    <>
      <nav>
        <a href="/">Dish Hunter</a>
      </nav>
      <header>
        <h1>Welcome to the recipe hunt!</h1>
        <p>Search for a recipe based on ingredients</p> 
      </header>
      <main>
        <input type="search" onChange={handleChange} onKeyUp={handleSearch} name="ingredients" id="ingredients" placeholder="eggs ham cheese" value={searchValue} />
        <div className="recipes">
          {recipes.results.map(recipe => (
            <RecipeCard key={recipe.canonical_id} url={recipe.thumbnail_url} name={recipe.name} />
          ))}
        </div>
      </main>
    </>
  )
}

export default App;
