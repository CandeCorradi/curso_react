import imagen from '../../assets/devgirl.png';



export default function DatosAlumno({alumno, curso, anioActual, enlace}: 
    {alumno: string, curso: string, anioActual: number, enlace: string}) {

  const styleCenter = { display: 'block', margin: '0 auto', width: '100px' };

  return (
    <>
      <h1>{alumno}</h1>
      <p>Curso: {curso}</p>
      <p>Año actual: {anioActual}</p>
      <p>La suma de 2 + 2 es = {2 + 2}</p>
      <p style={styleCenter}>
        <img src={imagen} alt="devgirl" width="150" />
      </p>
      <p><a href={enlace} target="_blank" rel="noopener noreferrer">Notion de la materia</a></p>
            <button onClick={(vale) => {
        console.log('Botón clickeado');
        console.log(vale);
      }}>Haz clic aquí</button>
    </>
  );
}