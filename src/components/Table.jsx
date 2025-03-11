import PropTypes from "prop-types";

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-300 shadow-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-l-4">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Duración (min)
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Estado
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fecha y Hora
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((call) => (
            <tr key={call.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {call.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {call.duracion}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    call.estado === "Exitosa"
                      ? "bg-green-100 text-green-800"
                      : call.estado === "Fallida"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {call.estado}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {call.fecha}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      duracion: PropTypes.string.isRequired,
      estado: PropTypes.string.isRequired,
      fecha: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Table;
