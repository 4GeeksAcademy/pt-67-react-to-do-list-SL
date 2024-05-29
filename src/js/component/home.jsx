import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tareas, setTareas] = useState(["Wash my hands", "Make homework"])
	const [nuevaTarea, setNuevaTarea] = useState("")
	
	
	const handleTareaNueva = (event) => {
		setNuevaTarea(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setTareas([...tareas,nuevaTarea])
		setNuevaTarea("")
	}

	const handleDelete = (posicionAEliminar) => {
		const newArr = []
		for (let i = 0; i < tareas.length; i++) {
			if (i !== posicionAEliminar) {
				newArr.push(tareas[i])
			}
		}
		setTareas(newArr)
	}

	return (
	
		<div className="w-50 m-auto mt-5">
			<form onSubmit={handleSubmit}> 
				<div className="mb-3">
					<label htmlhtmlFor="exampleInputEmail1" className="form-label">Add your task here:</label>
					<input onChange={handleTareaNueva} type="text" className="form-control" id="newTask" value={nuevaTarea} aria-describedby="taskHelp"/>
					<div id="taskHelp" className="form-text">You'll never forguet a task again.</div>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
			
			
			<ul className="w-50 m-auto">
				{/* Utilizamos el método map para generar dinámicamente los elementos <li> */}
				{tareas.map((item, index) => (
				<li key={index}>{item}
					<button onClick={()=>handleDelete(index)} type="button" className="btn btn-danger w-1">X</button>
				</li>
				))}
			</ul>
			{tareas.length === 0 ? <span>No task, add a task</span> : <span>Total {tareas.length}</span>}
		</div>
		

	);
};

export default Home;
