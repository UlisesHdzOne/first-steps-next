export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <span>Home</span>

      {/* Espaciado flexible entre elementos */}
      <div className="flex flex-1"></div>

      {/* Enlaces con clase para el estilo */}
      <a href="/about" className="ml-2 text-white">
        About
      </a>
      <a href="/contact" className="ml-2 text-white">
        Contact
      </a>
      <a href="/pricing" className="ml-2 text-white">
        Pricing
      </a>
    </nav>
  );
};
