import { useState } from 'react'
import './AddRecipeForm.css'

function AddRecipeForm({addRecipe, setShowModal}){
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Breakfast')
  const [ingredients, setIngredients] = useState('')
  const [steps, setSteps] = useState('')

  const recipe = {
    id: Date.now(),
    title,
    category,
    ingredients: ingredients.split(','),
    steps: steps.split(',')
  }

  return(
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Recipe</h2>
        <div className="form-group">
          <label>Recipe Name</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>Category</label>
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
          </select>
        </div>
        <div className="form-group">
          <label>Ingredients (comma separated)</label>
          <textarea value={ingredients} onChange={e => setIngredients(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>Steps (comma separated)</label>
          <textarea value={steps} onChange={e => setSteps(e.target.value)}/>
        </div>
        <div className="modal-buttons">
          <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
          <button className="submit-btn" onClick={() => {addRecipe(recipe); setShowModal(false)}}>Add Recipe</button>
        </div>
      </div>
    </div>
  )
}

export default AddRecipeForm;