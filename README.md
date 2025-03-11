# Dashboard React - Prueba Técnica

Este proyecto es un Dashboard básico desarrollado con React y Tailwind CSS, que consume datos simulados desde un archivo JSON local.

##  Funcionalidades

- **Tabla dinámica**: Muestra información sobre llamadas telefónicas (ID, duración, estado, fecha y hora).
- **Filtros**: Permite filtrar las llamadas por estado (Exitosa, Fallida, En Proceso).
- **Loader básico**: Indica cuando los datos están cargándose.
- **Diseño responsivo**: Implementado con Tailwind CSS para una experiencia limpia y moderna.

##  Tecnologías Utilizadas

- **React** (Create React App)
- **Tailwind CSS**
- **PropTypes** para validación de propiedades
- **Fetch API** para consumir datos locales

##  Estructura del Proyecto
dashboard/ ├── public/ │ ├── data/ │ │ └── data.json # Archivo JSON con los datos simulados ├── src/ │ ├── components/ │ │ └── Table.jsx # Componente de tabla │ ├── App.js # Componente principal │ ├── index.js # Punto de entrada de la aplicación ├── README.md # Archivo de instrucciones └── package.json # Configuración de dependencias


##  Requisitos

- **Node.js** >= 14
- npm o yarn

##  Instalación y Ejecución

1. Clona este repositorio:
   ```bash
   git clone 
   cd react-dashboard

2. Instala las dependencias 
npm install

3. Inicia el servidor de desarrollo:
npm start

Y apreciaras lo que vendria siendo la tabla con los datos locales.

