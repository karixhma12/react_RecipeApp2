

function RecipeDetail({recipe,setSelectedRecipe}){
    return(
        <>
            <p> {recipe.title} </p>
            <p> {recipe.category} </p>
            <ul> {recipe.ingredients.map((ingredient)=>{
                return <li key={ingredient}> {ingredient} </li>
                })} 
            </ul>
            <ul> {recipe.steps.map((step)=>{
                return <li key={step}> {step} </li>
                })} 
            </ul>
            <button onClick={()=>setSelectedRecipe(null)}> Back </button>
        </>
    )
}

export default RecipeDetail ;