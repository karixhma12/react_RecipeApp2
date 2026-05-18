import './RecipeDetail.css'

function RecipeDetail({recipe, setSelectedRecipe}){
  return(
    <div className="recipe-detail-container">
      <h1>{recipe.title}</h1>
      <p className="recipe-detail-category">{recipe.category}</p>
      
      <div className="recipe-detail-section">
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="recipe-detail-section">
        <h3>Steps</h3>
        <ol>
          {recipe.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>

      <button className="back-btn" onClick={() => setSelectedRecipe(null)}>
        ← Back to Recipes
      </button>
    </div>
  )
}

export default RecipeDetail;