import RecipeCard from "./RecipeCard";
import "./Recipelist.css";


function RecipeList({recipes,deleteRecipe, setSelectedCategory, selectedCategory,setSelectedRecipe}){
    return(
        <div className="recipe-list-container">
            <h2> All Recipes </h2>
            <div className="category-buttons">
                <button onClick={()=>setSelectedCategory("All")}> All </button>
                <button onClick={()=>setSelectedCategory("Breakfast")}> Breakfast </button>
                <button onClick={()=>setSelectedCategory("Lunch")}> Lunch </button>
                <button onClick={()=>setSelectedCategory("Dinner")}> Dinner </button>
            </div>
            <div className="recipe-grid">
                {recipes.map((recipe)=>{
                return <RecipeCard deleteRecipe={deleteRecipe} key={recipe.id} recipe={recipe} setSelectedRecipe={setSelectedRecipe}/>
                })}
            </div>    
        </div>
    )
}

export default RecipeList;