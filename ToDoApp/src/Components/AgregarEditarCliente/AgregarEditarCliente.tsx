import ReactDOM from 'react-dom';
import './AgregarEditarCliente.css';

export default function AgregarEditarCliente({ children }: { children: React.ReactNode }) {
  const portalNode = document.getElementById('AgregarEditarCliente');

  if (!portalNode) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="AgregarEditarCliente">{children}</div>,
    portalNode
  );
}