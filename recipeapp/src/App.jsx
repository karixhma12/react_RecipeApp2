import {useState} from "react";
import initialRecipes from "./data";


function App(){
  const [recipes,setRecipes] = useState(initialRecipes);
  const [isDarkMode, setIsDarkMode] = useState(false);
  return(
    <div>
      Recipe App 
    </div>
  )
}

export default App;
