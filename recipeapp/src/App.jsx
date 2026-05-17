import {useState} from "react";
import initialRecipes from "./data";
import Navbar from "./components/Navbar";


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
