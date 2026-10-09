import './TodoItem.css'

export default function TodoItem({
    texto, 
    completed, 
    onCompleteTodo, 
    onDeleteTodo}:
     {  texto?: string, 
        completed?: boolean, 
        onCompleteTodo: () => void,
        onDeleteTodo: () => void}) {
    return (
        <li className = "TodoItem">
            <span className={`Icon Icon-check ${completed ? 'Icon-check--active' : ''}`}
            onClick={onCompleteTodo}>✓
            </span>
            <p className={`TodoItem-p ${completed ? 'TodoItem-p--complete' : ''}`}>{texto}</p>
            <span className="Icon Icon-delete" onClick={onDeleteTodo}>x</span>
        </li>
    )
}