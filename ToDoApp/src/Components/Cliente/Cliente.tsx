import Card  from "@mui/material/Card";
import CardHeader  from "@mui/material/CardHeader";
import CardContent  from "@mui/material/CardContent";
import CardActions  from "@mui/material/CardActions";
import Button  from "@mui/material/Button";
import Swal from "sweetalert2";
import type { SweetAlertOptions } from "sweetalert2";
import type ICliente from "../../Interfaces/ICliente";


const ConfigEliminar: SweetAlertOptions = {
                            title: "¿Estás seguro?",
                            text: "No podrás revertir esta acción",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#ff08b5",
                            cancelButtonColor: "rgb(30, 255, 0)",
                            confirmButtonText: "Sí, eliminarlo"
                        }

const ConfigRestaurar: SweetAlertOptions = {
  title: "¿Deseas restaurar este cliente?",
  text: "El cliente volverá a figurar en la lista de activos",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#ff08b5", // verde para restaurar
  cancelButtonColor: "rgb(30, 255, 0)",
  confirmButtonText: "Sí, restaurar",
  cancelButtonText: "Cancelar",
};




export default function Cliente({ cliente, 
                        eliminarCliente, 
                        setOpenModal, 
                        setClienteSeleccionado,
                        restaurarCliente,
                        verEliminados 
                    }: 
            { cliente: ICliente; eliminarCliente: (id: number) => void; 
                                setOpenModal: (open: boolean) => void;
                                restaurarCliente: (id: number) => void;
                                verEliminados: boolean; 
                                setClienteSeleccionado: (cliente: ICliente | null) => void }) {
    const onEliminar=(id: number) => {
                        Swal.fire(ConfigEliminar).then((result) => {
                            if (result.isConfirmed) {
                                eliminarCliente(id);
                            }
                        });
                    }
    const onRestaurar=(id: number) => {
                        Swal.fire(ConfigRestaurar).then((result) => {
                            if (result.isConfirmed) {
                            restaurarCliente(id);
                            }
                        });
                        }
    return (
            <Card>
                <CardHeader title={`${cliente.firstname} ${cliente.lastname}`} />
                <CardContent>
                    <p>DNI: {cliente.dni}</p>
                    <p>Dirección: {cliente.address}</p>
                </CardContent>

                <CardActions sx={{ justifyContent: "center" }}>
                    {verEliminados && (
                        <Button variant="contained" onClick={() => onRestaurar(cliente.id)}>
                            Restaurar
                        </Button>
                    )} 
                    {!verEliminados && (
                        <Button variant="contained" onClick={() => {
                            setOpenModal(true); 
                            setClienteSeleccionado(cliente);
                            }}>
                                Editar
                        </Button>
                    )}
                    <Button variant="outlined" onClick={() => onEliminar(cliente.id)}>
                        Eliminar
                    </Button>
                </CardActions>
            </Card>
    );
}