function MainAuthLayout( {children} ) {
  return (
    <div className="relative h-screen w-screen">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/agua.png')" }}
      ></div>

      {/* Superposición de opacidad */}
      <div className="absolute inset-0 bg-white/50"></div>

      {/* Contenido */}
      <section className="relative flex items-center justify-center min-h-screen">
        <div className="w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 bg-white/50">
          <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-black dark:text-black">
              Te damos la bienvenida de nuevo
            </h5>

            {/* colocar el FORMS */}
            {children}

            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Entrar
            </button>
            <div className="text-sm font-medium text-black-500 dark:text-black-300">
              no tienes una cuenta?{" "}
              <a
                href="/CrearCuenta"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Crear Cuenta
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default MainAuthLayout;
