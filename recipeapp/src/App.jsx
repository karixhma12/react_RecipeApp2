import {useState} from "react";
import initialRecipes from "./data";
import Navbar from "./components/Navbar";
import RecipeCard from "./components/RecipeCard";


function App(){
  const [recipes,setRecipes] = useState(initialRecipes);
  const [isDarkMode, setIsDarkMode] = useState(false);
  return(
    <div>
      <Navbar/>
      
    </div>
  )
}

export default App;
