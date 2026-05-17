import RecipeCard from "./RecipeCard"

function RecipeList({recipes}){
    return(
        <div>
            <h2> All Recipes </h2>
            <div>
                {recipes.map((recipe)=>{
                return <RecipeCard key={recipe.id} recipe={recipe}/>
                })}
            </div>    
        </div>
    )
}

export default RecipeList;