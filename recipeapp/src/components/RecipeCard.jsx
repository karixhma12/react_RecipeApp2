


function RecipeCard({recipe,deleteRecipe, setSelectedRecipe}){
    return(
        <div onClick={()=>setSelectedRecipe(recipe)}>
            <h2> {recipe.title} </h2>
            <p> {recipe.category}</p>
            <button onClick={(e)=>{e.stopPropagation();deleteRecipe(recipe.id)}}> Delete </button>
        </div>
    )
}

export default RecipeCard;