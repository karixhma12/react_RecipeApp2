import "./RecipeCard.css";


function RecipeCard({recipe,deleteRecipe, setSelectedRecipe}){
    return(
        <div className="recipe-card" onClick={()=>setSelectedRecipe(recipe)}>
            <h2> {recipe.title} </h2>
            <div className="recipe-card-footer"> 
                <p> {recipe.category}</p>
            </div>           
            <button className="delete-btn" onClick={(e)=>{e.stopPropagation();deleteRecipe(recipe.id)}}> Delete </button>
        </div>
    )
}

export default RecipeCard;