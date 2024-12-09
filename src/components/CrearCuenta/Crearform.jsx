import Formularios from "../Formularios";
import Formulariochico from "../Formulariochico";

function Crearform() {
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
        name="Contraseñacrear"
        id="crearpassword"
        placeholder="************"
      />

      <Formularios
        estimado="password"
        titulo="Confirmar contraseña"
        type="password"
        name="Confirmarpassword"
        id="Confirmarpassword"
        placeholder="**********"
      />

      <Formulariochico />

      <Formularios
        estimado="Ciudad"
        titulo="Ciudad"
        type="text"
        name="Ingresociudad"
        id="Ingresociudad"
        placeholder="Ej: Santiago"
      />
    </form>
  );
}

export default Crearform;
