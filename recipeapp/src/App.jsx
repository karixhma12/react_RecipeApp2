import {useState} from "react";
import initialRecipes from "./data";
import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import ThemeContext from "./ThemeContext";
import { useContext } from "react";
import "./App.css";


function App(){
  const [recipes,setRecipes] = useState(initialRecipes);
  const [showModal, setShowModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  function addRecipe(newRecipe){
    setRecipes([...recipes,newRecipe]);
  }

  function deleteRecipe(id){
    const newRecipes = recipes.filter(recipe=>{
      return recipe.id!= id
    })

    setRecipes(newRecipes);
  }

  let filteredRecipes = recipes; 
  
  if(searchTerm!=''){
    filteredRecipes = recipes.filter((recipe)=>{
    return recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }
  

  return(
    <ThemeContext.Provider value={{isDarkMode,setIsDarkMode}}>
      <div className = {isDarkMode ? 'dark' : 'light'}>
        <Navbar setShowModal={setShowModal} setSearchTerm={setSearchTerm}/>
        <RecipeList recipes={filteredRecipes} deleteRecipe={deleteRecipe}/>
        {showModal && <AddRecipeForm setShowModal={setShowModal} addRecipe={addRecipe}/>}
      </div>
    </ThemeContext.Provider>  
  )
}

export default App;
