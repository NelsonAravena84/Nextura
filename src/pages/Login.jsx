import LoginForm from "../components/InicioSesion/Loginform";
import MainAuthLayout from "../layout/MainAuth";

function paginainiciosesion(){

    return (
        <MainAuthLayout tittle = "Bienvenido de nuevo" mostrarmensaje={false} mostrarcrearcuenta={true}>
            <LoginForm/>
        </MainAuthLayout>
    );
};

export default paginainiciosesion;