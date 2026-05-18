import {useContext} from "react";
import ThemeContext from "../ThemeContext";

function Navbar({setShowModal}){
    const {isDarkMode,setIsDarkMode} = useContext(ThemeContext);
    return(
        <div>
            <h1> Recipe App </h1>
            <input/>
            <button onClick={()=>setIsDarkMode(!isDarkMode)}> {isDarkMode ? "Light Mode" : "Dark Mode" } </button>
            <button onClick={()=>setShowModal(true)}> Add Recipe </button>
        </div>
    )
}

export default Navbar;