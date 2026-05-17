


function RecipeCard({recipe,deleteRecipe}){
    return(
        <div>
            <h2> {recipe.title} </h2>
            <p> {recipe.category}</p>
            <button onClick={()=>deleteRecipe(recipe.id)}> Delete </button>
        </div>
    )
}

export default RecipeCard;