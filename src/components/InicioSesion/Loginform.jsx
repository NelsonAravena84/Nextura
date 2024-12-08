import Formularios from "../Formularios";

function LoginForm() {
  return (
    <form>
      <Formularios
        estimado="email"
        titulo="Correo"
        type="email"
        name="correo"
        id="email"
        placeholder="correo123@gmail.com"
      />

      <Formularios
        estimado="password"
        titulo="Contraseña"
        type="password"
        name="contraseñausuario"
        id="usuariopassword"
        placeholder="********"
      />
    </form>
  );
}

export default LoginForm;
