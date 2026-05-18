import {useContext, useRef} from "react";
import ThemeContext from "../ThemeContext";

function Navbar({setShowModal, setSearchTerm}){
    const {isDarkMode,setIsDarkMode} = useContext(ThemeContext);
    const searchRef = useRef('');
    return(
        <div>
            <h1> Recipe App </h1>
            <input ref={searchRef}/>
            <button onClick={()=>setSearchTerm(searchRef.current.value)}> Search </button>
            <button onClick={()=>setIsDarkMode(!isDarkMode)}> {isDarkMode ? "Light Mode" : "Dark Mode" } </button>
            <button onClick={()=>setShowModal(true)}> Add Recipe </button>
        </div>
    )
}

export default Navbar;