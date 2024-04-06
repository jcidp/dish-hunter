import './App.css'

function App() {
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

export default App
