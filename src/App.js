import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Table from "./components/Table";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

function App() {
  const [calls, setCalls] = useState([]);
  const [filteredCalls, setFilteredCalls] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./data/data.json");
        setCalls(response.data);
        setFilteredCalls(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredCalls(
      filter ? calls.filter((call) => call.estado === filter) : calls
    );
  }, [filter, calls]);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 uppercase tracking-wide">
        Dashboard de Llamadas
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
        <Filter setFilter={setFilter} />
        <Table data={filteredCalls} />
        <Footer />

      </div>
      
    </div>

    
  );
}

export default App;
