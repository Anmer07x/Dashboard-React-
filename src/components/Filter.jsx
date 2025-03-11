import PropTypes from "prop-types";

const Filter = ({ setFilter }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="filter"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Filtrar por estado:
      </label>
      <select
        id="filter"
        onChange={(e) => setFilter(e.target.value)}
        className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Todos</option>
        <option value="Exitosa">Exitosa</option>
        <option value="Fallida">Fallida</option>
        <option value="En Proceso">En Proceso</option>
      </select>
    </div>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
