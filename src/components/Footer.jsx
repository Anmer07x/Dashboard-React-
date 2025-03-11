const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Dashboard de Llamadas. Todos los derechos reservados.
          <br />
          Desarrollado por: <a href="https://www.linkedin.com/in/andr%C3%A9s-david-mena-renteria-b34463269/" className="underline">Andres David Mena Renteria</a>
        </p>
      </footer>
    );
  };
  
  export default Footer;
  