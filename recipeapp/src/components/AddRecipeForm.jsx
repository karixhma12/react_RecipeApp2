import {useState} from "react";



function AddRecipeForm({addRecipe,setShowModal}){
    const [title,setTitle] = useState('');
    const [category,setCategory] = useState("Breakfast");
    const [ingredients,setIngredients] = useState('');
    const [steps,setSteps] = useState('');

    const recipe = {
            id : Date.now(),
            title : title,
            category : category,
            ingredients : ingredients.split(','),
            steps : steps.split(',')
        }

    return (
        <div>
            Name of Recipe : <input type="text" value={title} onChange={e=>{setTitle(e.target.value)}}></input>
            Category : <select value={category} onChange={e=>{setCategory(e.target.value)}}>
                            <option> Breakfast </option>
                            <option> Lunch </option>
                            <option> Dinner </option>
                       </select>
            Ingredients : <textarea value={ingredients} onChange={e=>{setIngredients(e.target.value)}}></textarea>
            Steps : <textarea value={steps} onChange={e=>{setSteps(e.target.value)}}></textarea>
            
            <button onClick={()=>setShowModal(false)}> Cancel </button>
            <button onClick={()=>{addRecipe(recipe);setShowModal(false)}}> Submit </button>
        </div>
    )
}

export default AddRecipeForm;