import MainAuthLayout from "../layout/MainAuth";
import Crearform from "../components/CrearCuenta/Crearform";

function CrearCuenta(){

    return (
        <MainAuthLayout tittle = "Registrarse" mostrarmensaje={true} mostrarcrearcuenta={false}>
            <Crearform />
        </MainAuthLayout>
    )
};

export default CrearCuenta;