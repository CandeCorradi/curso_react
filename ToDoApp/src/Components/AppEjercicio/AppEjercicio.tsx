import Encabezado from './Encabezado';
import DatosAlumno from './DatosAlumno';
import Materias from './Materias';
import PieDePagina from './PieDePagina';
import TarjetaProducto from './TarjetaProducto';
import AccionesAlumno from './AccionesAlumno';

function AppEjercicio() {
  function verAlumno() {
        console.log('Ver alumno');
    }
    function editarAlumno() {
        console.log('Editar alumno');
    }
    function eliminarAlumno() {
        console.log('Eliminar alumno');
    }
  return (
    <div>
      <Encabezado />
        <DatosAlumno 
            alumno="Candela Corradi" 
            curso="3er año" 
            anioActual={new Date().getFullYear()} 
            enlace="https://agate-fold-e1c.notion.site/JSX-3c0731fb91f48190ba28ef903d3c1f18" />
      <Materias />
      <AccionesAlumno  verAlumno={verAlumno} editarAlumno={editarAlumno} eliminarAlumno={eliminarAlumno} />
      <TarjetaProducto 
        nombre="Gomitas mogul" 
        precio={5.000} 
        categoria="Golosinas" 
        disponible={true} />
      <PieDePagina />
    </div>
  );
}

export default AppEjercicio;