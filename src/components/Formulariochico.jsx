function Formulariochico(){
  return (
    <div className="block mb-2 text-sm font-medium text-white dark:text-black">
      <div className="flex space-x-4">
        {/* Grupo para el campo "Nombre" */}
        <div className="flex flex-col">
          <label htmlFor="Nombre" className="mb-1 font-semibold">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg p-2 w-32 focus:ring-white-500 focus:border-blue-500 dark:bg-transparent dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
          />
        </div>

        {/* Segundo */}
        <div className="flex flex-col">
          <label htmlFor="Apellido" className="mb-1 font-semibold">
            Apellido
          </label>
          <input
            type="text"
            id="Apellido"
            name="Apellido"
            className="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg p-2 w-33 focus:ring-white-500 focus:border-blue-500 dark:bg-transparent dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Formulariochico;
