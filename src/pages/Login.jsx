import LoginForm from "../components/InicioSesion/Loginform";
import MainAuthLayout from "../layout/MainAuth";

function paginainiciosesion(){

    return (
        <MainAuthLayout>
            <LoginForm/>
        </MainAuthLayout>
    );
};

export default paginainiciosesion;