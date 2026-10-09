
import { useState } from 'react'
export default function AccionesAlumno( { 
        verAlumno, 
        editarAlumno, 
        eliminarAlumno }:
    {   verAlumno: () => void; 
        editarAlumno: () => void; 
        eliminarAlumno: () => void 
    }) 
{
    const [ultimaAccion, setUltimaAccion] = useState<string>('');
    const [showLastAction, setLastAction] = useState<boolean>(true);
    const [mensaje, setMensaje] = useState<string>('');
    const lista: string[] = ['Candela Corradi', 'Juan Perez', 'Maria Lopez', 'Pedro Gonzalez', 'Lucia Fernandez'];
    const [listaAlumnos, setListaAlumnos] = useState<string[]>(lista);

  return (
    <>
        <h2>Acciones del alumno: {mensaje}</h2>
        {showLastAction && (
            <h3> Última acción realizada: {ultimaAccion}</h3>
        )}
        
        <button onClick={() => { setUltimaAccion('Ver alumno'); verAlumno(); }}>Ver alumno</button>
        <button onClick={() => { setUltimaAccion('Editar alumno'); editarAlumno(); }}>Editar alumno</button>
        <button onClick={() => { setUltimaAccion('Eliminar alumno'); eliminarAlumno(); }}>Eliminar alumno</button>
        <button onClick={() => { setLastAction(!showLastAction); }}> Mostrar/Ocultar última acción: </button>
        <p>Mensaje de prueba: </p>
        <label htmlFor="mensaje">Mensaje:</label>
        <input type="text" id="mensaje" name="mensaje" placeholder="Escriba un mensaje" 
        value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
        <h3>Lista de alumnos:</h3>
        <ul>
            {listaAlumnos.map((alumno) => (
                <li key={alumno}>{alumno}</li>
            ))}
        </ul>
    </>
  );
}