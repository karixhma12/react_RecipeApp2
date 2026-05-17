

function Navbar({setShowModal}){
    return(
        <div>
            <h1> Recipe App </h1>
            <input/>
            <button> Dark Mode </button>
            <button onClick={()=>setShowModal(true)}> Add Recipe </button>
        </div>
    )
}

export default Navbar;