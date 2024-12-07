function Header() {
  return (
    <header
      className="bg-cover bg-center h-[450px] relative"
      style={{ backgroundImage: "url('/agua.png')"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-teal-300 opacity-40"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 z-10 relative">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/mano.png" alt="Nextura Logo" className="w-12 h-12" />
          <span className="ml-2 text-black font-bold text-xl">NEXTURA</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row items-center ml-[305px] justify-center w-auto max-w-[800px] md:space-x-6 text-black mx-auto">
          <li className="hover:underline">
            <a href="#inicio">Inicio</a>
          </li>
          <li className="hover:underline">
            <a href="#sobre-nosotros">Sobre Nosotros</a>
          </li>
          <li className="hover:underline">
            <a href="#contacto">Contacto</a>
          </li>
          <li className="hover:underline">
            <a href="#ayuda">Ayuda</a>
          </li>
        </ul>

        {/* Responsive Menu Button */}
        <button className="block md:hidden text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col justify-center bottom-[50px] items-center text-center h-full z-10 relative px-4">
        <h1 className="text-black text-4xl md:text-6xl font-bold mb-4">
          Bienvenido A Nextura
        </h1>
        <p className="text-black text-lg md:text-xl mb-8">
          Controle Sus Facturas Y Tome Decisiones Más Inteligentes Sobre Su
          Consumo De Energía Y Agua.
        </p>
        <a
          href="/Login"
          className="bg-teal-300 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md text-lg"
        >
          Comenzar!
        </a>
      </div>
    </header>
  );
}

export default Header;
