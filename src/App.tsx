import './App.css'
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
      </main>
    </>
  )
}

export default App;
