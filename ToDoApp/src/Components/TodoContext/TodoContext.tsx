import React from 'react';

export type Todo = {
    text: string;
    completed: boolean;
}

export type TodoContextType = {
    tareasFiltradas: Todo[];
    completadas: number;
    total: number;
    textoBusqueda: string;
    openModal: boolean;
    setTextoBusqueda: (texto: string) => void;
    addTodo: (text: string) => void;
    completeTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
    setOpenModal: (open: boolean) => void;
}

const TodoContext = React.createContext<TodoContextType | null>(null);

function TodoProvider({ children }: { children: React.ReactNode }) {
    const listaTareas = [
        { text: 'Cambiar la garrafa', completed: false },
        { text: 'Ir al padel', completed: false },
        { text: 'Actualizar el CV', completed: false },
        { text: 'Llamar a la abuela', completed: false },
    ];

    const [tareasApp, setTareasApp] = React.useState<Todo[]>(listaTareas);
    const [textoBusqueda, setTextoBusqueda] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completadas = tareasApp.filter(t => t.completed).length;
    const total = tareasApp.length;
    const tareasFiltradas = tareasApp.filter(
        tarea => tarea.text.toLowerCase().includes(textoBusqueda.toLowerCase()));


    const completeTodo = (text: string) => {
    const newTodos = [...tareasApp];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text );
    newTodos[todoIndex].completed = !newTodos [todoIndex].completed;
    setTareasApp(newTodos); };
    
    const deleteTodo = (text: string) => {
      const newTodos = [...tareasApp];
      const todoIndex = newTodos.findIndex((todo) => todo.text === text );
      newTodos.splice(todoIndex, 1);
      setTareasApp(newTodos); 
    }
    
    const addTodo = (text: string) => {
            const newTodos = [...tareasApp];
            newTodos.push({
                completed: false,
                text: text
            });
            setTareasApp(newTodos);
    } 

    return (
        <TodoContext.Provider value={{
            tareasFiltradas,
            completadas,
            total,
            textoBusqueda,
            openModal,
            setTextoBusqueda,
            addTodo,
            completeTodo,
            deleteTodo,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
