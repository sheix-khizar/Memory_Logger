import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllMemories = () => {
  const [memories, setMemories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMemories = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/memories`);
      setMemories(res.data);
    } catch (error) {
      console.error("Error fetching memories:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this memory?')) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/memories/${id}`);
        fetchMemories(); // Refresh the list after deletion
      } catch (error) {
        console.error("Error deleting memory:", error);
      }
    }
  };

  useEffect(() => {
    fetchMemories();
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto bg-gray-900 min-h-screen text-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Memories</h1>
        <Link 
          to="/" 
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          ← Back to Home
        </Link>
      </div>

      {isLoading ? (
        <div className="text-center py-8">Loading memories...</div>
      ) : memories.length === 0 ? (
        <div className="text-center py-8">No memories found</div>
      ) : (
        <div className="grid gap-4">
          {memories.map((memory) => (
            <div key={memory._id} className="p-4 border border-gray-700 rounded-lg bg-gray-800">
              <div className="flex justify-between items-start text-blue-400 flex-1">
                  <p className="whitespace-pre-line">{memory.content}</p>
                <button
                  onClick={() => handleDelete(memory._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 ml-4 hover: cursor-pointer"
                >
                  Delete
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                {new Date(memory.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllMemories;