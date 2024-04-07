import { Outlet } from 'react-router-dom';
import './App.css'

function App() {


  return (
    <>
      <nav>
        <a href="/">Dish Hunter</a>
      </nav>
      <Outlet />
    </>
  )
}

export default App;
