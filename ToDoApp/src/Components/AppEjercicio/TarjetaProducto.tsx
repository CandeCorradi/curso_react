export default function TarjetaProducto({ nombre, precio, categoria, disponible }: 
    { nombre: string; precio: number; categoria: string; disponible: boolean }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',}}>
      <h3>{nombre}</h3>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Precio:</strong> ${precio}</p>
      <p>
        <strong>Estado: </strong>
        <span style={{ color: disponible ? 'green' : 'red' }}>
          {disponible ? 'Disponible' : 'Sin stock'}
        </span>
      </p>
    </div>
  );
}