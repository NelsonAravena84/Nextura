function Formularios(props) {
  return (
      <div>
        <label
          htmlFor={props.estimado}
          className="block mb-2 text-sm font-medium text-white dark:text-black"
        >
          {props.titulo}
        </label>
        <input
          type={props.type}
          name={props.name}
          id={props.id}
          className="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-white-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
          placeholder={props.placeholder}
        />

        
      </div>
  );
}

export default Formularios;
