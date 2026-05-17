import {useState} from "react";
import initialRecipes from "./data";
import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";


function App(){
  const [recipes,setRecipes] = useState(initialRecipes);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function addRecipe(newRecipe){
    setRecipes([...recipes,newRecipe]);
  }

  return(
    <div>
      <Navbar setShowModal={setShowModal}/>
      <RecipeList recipes={recipes}/>
      {showModal && <AddRecipeForm setShowModal={setShowModal} addRecipe={addRecipe}/>}
    </div>
  )
}

export default App;
