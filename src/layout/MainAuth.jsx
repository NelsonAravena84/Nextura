function MainAuthLayout({
  children,
  tittle,
  mostrarmensaje,
  mostrarcrearcuenta,
}) {
  return (
    <div className="relative h-screen w-screen">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('Backgrounduser.png')" }}
      ></div>

      {/* Superposición de opacidad */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Contenido */}
      <section className="relative flex items-center justify-center min-h-screen">
        <div className="w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 bg-white/50">
          <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-black dark:text-black">
              {tittle}
            </h5>
            {mostrarmensaje && (
              <p>Crea una cuenta para comenzar a usar NEXTURA.</p>
            )}

            {/* colocar el FORMS */}
            {children}

            <button
              type="submit"
              className="w-full text-white bg-cyan-400 hover:bg-cyan-400 focus:ring-4 focus:outline-none focus:ring-cyan-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-400 dark:hover:bg-cyan-400 dark:focus:ring-cyan-400"
            >
              Entrar
            </button>

            
            {mostrarcrearcuenta && (
              <div className="text-sm font-medium text-black-500 dark:text-black-300">
                no tienes una cuenta?{" "}
                <a
                  href="/CrearCuenta"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Crear Cuenta
                </a>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

export default MainAuthLayout;
