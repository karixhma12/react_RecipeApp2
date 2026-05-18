import {useContext, useRef} from "react";
import ThemeContext from "../ThemeContext";
import "./Navbar.css";

function Navbar({setShowModal, setSearchTerm}){
    const {isDarkMode,setIsDarkMode} = useContext(ThemeContext);
    const searchRef = useRef('');
    return(
        <div className="navbar">
            <h1 className="Navbar_title"> Recipe App </h1>          
            <div className="navbar_right">
                <input className="Navbar_searchinput" ref={searchRef}/>
                <button className="Navbar_searchbutton" onClick={()=>setSearchTerm(searchRef.current.value)}> Search </button>
                <button className="Navbar_togglebutton" onClick={()=>setIsDarkMode(!isDarkMode)}> {isDarkMode ? "Light Mode" : "Dark Mode" } </button>
                <button className="Navbar_addrecipebutton" onClick={()=>setShowModal(true)}> Add Recipe </button>
            </div>           
        </div>
    )
}

export default Navbar;