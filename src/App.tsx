import './App.css'
import { RecipeCard } from './components/RecipeCard';
import { useRecipes } from './hooks/useRecipes'

function App() {
  const { recipes, error, loading } = useRecipes()

  if (error) {
    console.log(error);
  }

  if (loading) {
    console.log("Loading...");
  }

  if (recipes) {
    console.log(recipes);
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
        <input type="search" name="ingredients" id="ingredients" placeholder="ingredients" />
        <button type="submit">Search</button>
        <div className="recipes">
          {recipes.results.map(recipe => (
            <RecipeCard url={recipe.thumbnail_url} name={recipe.name} />
          ))}
        </div>
      </main>
    </>
  )
}

export default App;
