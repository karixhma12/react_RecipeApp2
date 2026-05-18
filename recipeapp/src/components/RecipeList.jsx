import RecipeCard from "./RecipeCard"

function RecipeList({recipes,deleteRecipe, setSelectedCategory, selectedCategory}){
    return(
        <div>
            <h2> All Recipes </h2>
            <div>
                <button onClick={()=>setSelectedCategory("All")}> All </button>
                <button onClick={()=>setSelectedCategory("Breakfast")}> Breakfast </button>
                <button onClick={()=>setSelectedCategory("Lunch")}> Lunch </button>
                <button onClick={()=>setSelectedCategory("Dinner")}> Dinner </button>
            </div>
            <div>
                {recipes.map((recipe)=>{
                return <RecipeCard deleteRecipe={deleteRecipe} key={recipe.id} recipe={recipe}/>
                })}
            </div>    
        </div>
    )
}

export default RecipeList;