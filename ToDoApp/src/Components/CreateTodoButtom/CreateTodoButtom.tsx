import './CreateTodoButtom.css'

export default function CreateTodoButtom() {
    return (
        <button className= "CreateTodoButton"
        onClick = {() => console.log('Se ha hecho click en el botón de Crear Tarea')}
        >+</button>
    )
}