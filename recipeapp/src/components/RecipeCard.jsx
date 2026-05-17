


function RecipeCard({recipe}){
    return(
        <div>
            <h2> {recipe.title} </h2>
            <p> {recipe.category}</p>
        </div>
    )
}

export default RecipeCard;